import React from 'react'
import CartImage from './CartImage'
import styled from 'styled-components'
import ChangeCartQuantity from './ChangeCartQuantity'
import RemoveFromCart from './RemoveFromCart'

const List = styled.div`
  display: flex;
  background: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
`

const Desc = styled.div`
  padding: 0 1.5rem;
`

const Title = styled.p`
  margin-top: 0;
`

const Total = styled.div`
  margin-left: auto;
  text-align:right;
`

const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const Items = styled.section`
  flex: 1 1 auto;
  margin-right: 2rem;
  max-width: 660px;
  @media (max-width: 720px){
    max-width: none;
    margin-right: 0;
  }
`

function LineItems({ items }) {
  return (
    <Items>
      {items.map(item => (
        <List key={item.id}>
          <CartImage image={item.variant.image} />
          <Desc>
            <Title>{item.title}</Title>
            <p>{item.variant.price.replace(".", ",")} €</p>
            <ChangeCartQuantity item={item} />
          </Desc>
          <Total>
            <RemoveFromCart item={item} />
            <p>Total: <TotalPrice>{(item.quantity * item.variant.price).toFixed(2).replace(".", ",")} €</TotalPrice></p>
          </Total>
        </List>
      ))}
    </Items>
  )
}

export default LineItems
