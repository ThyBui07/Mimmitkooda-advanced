import React from 'react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import PriceTag from './PriceTag'
import styled from 'styled-components'

const ViewButton = styled(Link)`
  display: block;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  border: 1px solid #181818;
  border-radius: 4px;
  padding: 12px;

  &:hover {
    background-color: #eee;
  }
`

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <ProductImage image={product.image} />
      <PriceTag price={product.variant.price} />
      <ViewButton to={`/product/${product.handle}`} >
        View Product
      </ViewButton>
    </div>
  )
}

export default ProductCard
