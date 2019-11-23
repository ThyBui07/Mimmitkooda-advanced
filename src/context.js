import React, { Component, createContext } from 'react'
import Client from 'shopify-buy'

export const ShopContext = createContext()

export class ShopProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkout: null,
      products: null
    }

    this.client = null
    this.initShop = this.initShop.bind(this)
    this.createCheckout = this.createCheckout.bind(this)
    this.addLineItem = this.addLineItem.bind(this)
    this.updateLineItem = this.updateLineItem.bind(this)
  }

  createCheckout = async () => {
    const checkout = await this.client.checkout.create()
    window.localStorage.setItem('mimmitCheckout', checkout.id)
    return checkout
  }

  initShop = async () => {
    this.client = Client.buildClient({
      domain: 'mimmitkoodaa-advanced-session.myshopify.com',
      storefrontAccessToken: process.env.REACT_APP_STOREFRONT_ACCESS_TOKEN
    })

    let checkout
    const checkoutId = window.localStorage.getItem('mimmitCheckout')

    if(checkoutId) {
      checkout = await this.client.checkout.fetch(checkoutId)
    } else {
      checkout = await this.createCheckout()
    }


    const products = await this.client.product.fetchAll()
      .then(products => {
        // We will simplify the product object a bit in here:
        return products.map(product => ({
          id: product.id,
          title: product.title,
          handle: product.handle,
          description: product.description,
          descriptionHtml: product.descriptionHtml,
          image: product.images.shift(),
          variant: product.variants.map(variant => ({
            id: variant.id,
            available: variant.available,
            price: variant.price,
            sku: variant.sku
          })).shift()
        }))
      })

    this.setState({
      checkout: checkout,
      products: products
    })
  }

  addLineItem = (id, quantity) => {
    const { checkout } = this.state
    const items = [{ variantId: id, quantity: quantity }]
    const checkoutId = checkout.id
    console.log(this.client.checkout);
    this.client.checkout
      .addLineItems(checkoutId, items)
      .then(checkout => {
        this.setState({
          checkout
        })
      })
      .catch(error => console.error(error))
  }

  updateLineItem = (id, quantity) => {
    console.log(id, quantity);
    const { checkout } = this.state
    const items = [{ id, quantity }]
    const checkoutId = checkout.id
    this.client.checkout
      .updateLineItems(checkoutId, items)
      .then(checkout => {
        this.setState({
          checkout
        })
      })
      .catch(error => console.error(error))
  }

  componentDidMount() {
    this.initShop()
  }

  render() {
    const { children } = this.props
    return (
      <ShopContext.Provider value={{
        checkout: this.state.checkout,
        products: this.state.products,
        addLineItem: this.addLineItem,
        updateLineItem: this.updateLineItem
      }}>
        {children}
      </ShopContext.Provider>
    )
  }
}

export default ShopProvider