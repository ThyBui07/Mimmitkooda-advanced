# Task 6 - Create Product Card

**Learnings**

- what is CSS-in-JS and how to use it
- How to use the object properties in component

**Task Definition**

Your task is to create the contents of the **ProductCard** component using components listed below as your help. You also need to pass correct props from the product object to these components:

- ProductImage
- PriceTag
- ViewButton

**Files**

- `src/components/ProductCard.js`


**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
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
      <ProductImage image={product.image} />
      <h3>{product.title}</h3>
      <PriceTag price={product.variant.price} />
      <ViewButton to={`/product/${product.id}`}>
        View product
      </ViewButton>
    </div>
  )
}

export default ProductCard
```

  </p>
</details>

**[← Previous task](./task5.md)** | **[Next task →](./task7.md)**