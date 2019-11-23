import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import logo from '../images/logo_black.png'
import {ShopContext} from '../context'
import styled from 'styled-components'

const ListItem = styled.li`
  position: relative;
`

const Count = styled.span`
  position: absolute;
  top: -6px;
  margin-left: 4px;
  font-weight: 400;
  font-size: 14px;
`

function Navigation() {

  const { checkout } = useContext(ShopContext)

  const cartCount = checkout
    ? checkout.lineItems.reduce((accumulator, lineItem) => accumulator + lineItem.quantity, 0)
    : 0

  return (
    <nav>
      <ul>
        <li>Navigation should appear here</li>
      </ul>
    </nav>
  )
}

export default Navigation
