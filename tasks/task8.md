# Task 8 - Single Product Page

**Learnings**

- How the routing parameters work with React Router.

**Task Definition**

Make nicer urls for the single products. The single product page's url looks terrible. Instead of nice and SEO friendly urls that you might have used to see in webshops this one uses long and hard to remember product ids like this: `Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzNTI0Mzg5NjAyMTA=`.

The current solution uses `productId` in the routes that you defined in the [task 2](./task2.md) and you need to change that to be product handle.

**Files**

- `src/App.js`
- `src/components/ProductCard.js`
- `src/pages/Product.js`


**Example**

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
// App.js
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
            <Route path="/product/:handle">
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

```jsx
// ProductCard.js
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <ProductImage image={product.image} />
      <h3>{product.title}</h3>
      <PriceTag price={product.variant.price} />
      <ViewButton to={`/product/${product.handle}`}>
        View product
      </ViewButton>
    </div>
  )
}

export default ProductCard
```

```jsx
// Product.js
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
```

  </p>
</details>

**[← Previous task](./task7.md)**