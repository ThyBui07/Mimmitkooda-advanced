import React, {useContext} from 'react'
import {ShopContext} from '../context'
import styled from 'styled-components'

const TotalPrice = styled.h1`
 font-weight: 800;
 font-size: 32px;
 line-height: 34px;
`

const Total = styled.div`
 width: 200px;
 background: #fff;
 text-align:center;
 margin-bottom: 1rem;
`

const ToCheckout = styled.a`
  background: #1F5240;
  border-radius: 24px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 8px 36px;
`

function Totals() {
  const { checkout } = useContext(ShopContext)
  console.log(checkout);
  return (
  	<Total>
  		<h3>TOTAL</h3>
    	<TotalPrice>€{checkout.totalPrice.replace(".", ",")}</TotalPrice>
    	<ToCheckout target="_blank" rel="noopener noreferrer" href={checkout.webUrl}>CHECKOUT →</ToCheckout>
    </Total>
  )
}

export default Totals
