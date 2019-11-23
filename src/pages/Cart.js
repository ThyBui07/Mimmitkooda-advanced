import React, { useContext} from 'react'
import {ShopContext} from '../context'
import EmptyCart from '../components/EmptyCart'
import LineItems from '../components/LineItems'
import Totals from '../components/Totals'
import styled from 'styled-components'

const CartDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`

const Title = styled.h1`
  width: calc(100% - 250px);
`


function Cart() {
  const { checkout } = useContext(ShopContext)

  if( ! checkout ) return null

  return (

    <CartDisplay>
      <Title>Your Cart</Title>
        {checkout.lineItems.length > 0
          ? <LineItems items={checkout.lineItems} />
          : <EmptyCart />
        }
        <Totals />
    </CartDisplay>
  )
}

export default Cart
