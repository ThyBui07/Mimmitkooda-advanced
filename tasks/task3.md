# Task 3 - Navigation

**Learnings**

Within this task we will learn:
- how to create a navigation component to our webshop
- How to import images

**Task Definition**

You task is to link the navigation items to the routes we just created in the previous tasks. The idea is to use the `Link` components' `to` properties to point to the paths that we defined in the previous task. You can also import the logo image and use it as content of the navigation item.

**Files**

- `src/components/Navigation.js`

**Example**

```jsx
import { Link } from 'react-router-dom'
import logo from '../images/logo_black.png'


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/why-us">Why Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
```

**Result**

<details>
  <summary>Click here to see the end result</summary>
  <p>

```jsx
import React from 'react'
import { Link } from "react-router-dom"
import logo from '../images/logo_black.png'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </li>
        <li>
          <Link to="/why-us">Why Us</Link>
        </li>
        <li>
          <Link to="/our-services">Our Services</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
```
  </p>
</details>

**[← Previous task](./task2.md)** | **[Next task →](./task4.md)**