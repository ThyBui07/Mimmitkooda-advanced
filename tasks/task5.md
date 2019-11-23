# Task 5 - Products List

**Learnings**

- Brief about what is Context API
- What's inside of the passed props and how to solve that
- How to loop arrays of data

**Task Definition**

Your task is to figure out what data there is inside of the `products` prop that the **ProductsList** component get's in by using `console.log` method. Then you need to loop through the products using `map` array function and render list item elements (**li**) and **ProductCard** components inside that. When looping through data React needs to have a `key` property wor each list item. You should use the product id as the value for that property.

**Files**

- `src/components/ProductsList.js`

**Example**

```jsx
function MyFunction(data) {
  // log contents of the data
  console.log(data)
}

var myArray = [...]

// Loop an array with map:
myArray.map( arrayItem => {
  // Now here you can render the list item.
})

```

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
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
```

  </p>
</details>

**[← Previous task](./task4.md)** | **[Next task →](./task6.md)**