# Task 7 - Add To Cart Button

**Learnings**

- How to handle button clicks with React

**Task Definition**

Your task is to create `onClick` handler for the Add to cart -button. All `<button>` elements can have one `onClick` property which is fired after user clicks that button. We need to attach the `addLineItem` function to the onClick. The `addLineItem` function takes two parameters: first one is the product variant id and the second is the quantity.

**Files**

- `src/components/AddToCartButton.js`

**Examples**

```jsx
<button onClick={() => {
  console.log('Button clicked!')
  // in here you should add the item to cart instead of just logging :)
}}>
```

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
function AddToCartButton({ product, quantity = 1 }) {
  const { addLineItem } = useContext(ShopContext)
  return (
    <Button onClick={() => addLineItem(product.variant.id, quantity)}>Add to cart</Button>
  )
}
```

  </p>
</details>

**[← Previous task](./task6.md)** | **[Next task →](./task8.md)**