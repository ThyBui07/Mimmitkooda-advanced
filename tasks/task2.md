# Task 2 - Router

**Learnings**

By doing this task we will learn:
- how **jsx** looks like
- How to import (and export) components
- How to do routing with react router

**Task Definition**

Your task is to import pages listed below and create routes inside `App.js` to these pages. The path is marked in parenthesis.

- Home (`/`)
- Cart (`/cart`)
- Product (`/product/:productId`)
- WhyUs (`/why-us`)
- OurServices (`/our-services`)

**Files**

- `src/App.js`

**Example**

```js
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MyPage from './pages/MyPage'

<Switch>
  <Route exact path="/my-page">
    <MyPage />
  </Route>
</Switch>
```

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ShopProvider from './context'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './pages/Product'
import WhyUs from './pages/WhyUs'
import OurServices from './pages/OurServices'

function App() {
  return (
    <ShopProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/why-us">
              <WhyUs />
            </Route>
            <Route path="/our-services">
              <OurServices />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </ShopProvider>
  )
}

export default App
```
  </p>
</details>

**[← Previous task](./task1.md)** | **[Next task →](./task3.md)**