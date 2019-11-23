import React, {useContext} from 'react'
import ProductsList from '../components/ProductsList'
import Banner from '../components/Banner'
import { ShopContext } from '../context'
import Heading from '../components/Heading'
import Instagram from '../components/Instagram'
import Description from '../components/Description'


function Home() {
  const { products } = useContext(ShopContext)

  return (
    <div>
      <Banner />
      {/* Replace this with your Heading component and use title 'Products' */}
      <Heading title="Products" />
      <ProductsList products={products} />
      {/* Replace this with your Heading component and use title 'Our Instagram' */}
      <Heading title="Our Instagram" />
      <Instagram />
      <Description />
    </div>
  )
}

export default Home
