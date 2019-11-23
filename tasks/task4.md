# Task 4 - Home Page

**Learnings**

- How to create new component
- How to pass props

**Task Definition**

Your task is to first create new component called **Heading**. The component should render **h2** element and use property called **title** for the content. You'll then need to import that component into the **Home** page and pass the titles given in the comments for those components.

**Files**

- `src/components/Heading.js`
- `src/pages/Home.js`

**Example**

```jsx
import React from 'react'

function MyComponent({ myProp }) {
  return (
    <div>{myProp}</div>
  )
}

export default MyComponent
```

```jsx
// Usage:
import MyComponent from '../components/MyComponent'

function Home() {
  return (
    <MyComponent myProp="My content here" />
  )
}
```

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
// Heading.js
import React from 'react'

function Heading({ title }) {
  return (
    <h2>{title}</h2>
  )
}

export default Heading
```

```jsx
// Home.js
import React, {useContext} from 'react'
import ProductsList from '../components/ProductsList'
import Banner from '../components/Banner'
import { ShopContext } from '../context'
import Heading from '../components/Heading'
import Instagram from '../components/Instagram'
import Description from '../components/Description'
import LikeMyPage from '../components/LikeMyPage'


function Home() {
  const { products } = useContext(ShopContext)

  return (
    <div>
      <Banner />
      <Heading title="Products" />
      <ProductsList products={products} />
      <Heading title="Our Instagram" />
      <Instagram />
      <Description />
      <LikeMyPage />
    </div>
  )
}

export default Home

```

  </p>
</details>

**[← Previous task](./task3.md)** | **[Next task →](./task5.md)**