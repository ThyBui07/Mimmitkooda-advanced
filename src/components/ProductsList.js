import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  padding: 0;
  margin: 0;
  grid-gap: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

function ProductsList({ products }) {
  return (
    <List>
      {products && products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </List>
  )
}

export default ProductsList
