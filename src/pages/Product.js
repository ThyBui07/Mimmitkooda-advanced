import React, { useContext} from 'react'
import {ShopContext} from '../context'
import {useParams} from 'react-router-dom'
import ProductsList from '../components/ProductsList'
import AddToCartButton from '../components/AddToCartButton'
import styled from 'styled-components'
import PriceTag from '../components/PriceTag'

const Grid = styled.div`
  display: grid;
  grid-gap: 24px;
  margin: 24px 0;
  grid-template-columns: minmax(0, 1fr);
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 72px 0;
  }
`

const GridItem = styled.div`
  @media screen and (min-width: 700px) {
    grid-column-start: ${(props) => props.span ? 'span ' + props.span : 'auto' }
  }
`

const Img = styled.img`
  display: block;
  width: 100%;
  object-fit: contain;
`

const Description = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`

function Product() {

  const { handle } = useParams()
  const { products } = useContext(ShopContext)
  if( ! products ) return null
  const product = products.find(product => product.handle === handle)
  if( ! product ) return null
  const amount = (window.innerWidth <= 1280) && (window.innerWidth >= 1024) ? 3 : 4

  // Random subset of products.
  const additionalProducts = products
    .filter(product => product.handle !== handle)
    .sort(() => 0.5 - Math.random())
    .slice(0, amount)

  return (
    <Grid>
      <GridItem>
        <Img src={product.image.src} alt={product.title} />
      </GridItem>
      <GridItem>
        <h1>{product.title}</h1>
        <PriceTag price={product.variant.price} large />
        <AddToCartButton product={product} />
        <Description dangerouslySetInnerHTML={{__html: product.descriptionHtml}}/>
      </GridItem>
      <GridItem span={2}>
        <h2>You might be interested in these</h2>
        <ProductsList products={additionalProducts} />
      </GridItem>
    </Grid>
  )
}

export default Product
