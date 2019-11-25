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

  @keyframes blink {
    0% { box-shadow: 0 0 15px red; }
    50% { box-shadow: none; }
    100% { box-shadow: 0 0 15px red; }
}

@-webkit-keyframes blink {
    0% { box-shadow: 0 0 15px red; }
    50% { box-shadow: 0 0 0; }
    100% { box-shadow: 0 0 15px red; }
}
  >li:first-child {
    /* -webkit-box-shadow: 1px 6px 37px 0px rgba(51,50,51,0.52);
-moz-box-shadow: 1px 6px 37px 0px rgba(51,50,51,0.52);
box-shadow: 1px 6px 37px 0px rgba(51,50,51,0.52); */

  -webkit-animation: blink 3.0s linear infinite;
  -moz-animation: blink 3.0s linear infinite;
  -ms-animation: blink 3.0s linear infinite;
  -o-animation: blink 3.0s linear infinite;
  animation: blink 3.0s linear infinite;
  }

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
  console.log(products);

  return (
    <List>
      {
        products &&
        products.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))
      }
    </List>
  )
}

export default ProductsList
