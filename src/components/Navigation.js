import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import logo from '../images/logo_black.png'
import {ShopContext} from '../context'
import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;
`

const Count = styled.span`
  /* position: absolute;
  top: -6px;
  margin-left: 4px;
  font-weight: 400;
  font-size: 14px; */


  width: 20px;
    position: absolute;
    border-radius: 50%;
    top: 35px;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: white;
    background-color: red;
`

function Navigation() {

  const { checkout } = useContext(ShopContext)

  const cartCount = checkout
    ? checkout.lineItems.reduce((accumulator, lineItem) => accumulator + lineItem.quantity, 0)
    : 0

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
          <Link to="/cart">Cart <Count>{cartCount}</Count> </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
