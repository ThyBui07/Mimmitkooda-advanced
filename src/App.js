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
