import React from 'react'
import styled from 'styled-components'

const Price = styled.div`
  font-style: normal;
  font-weight: 800;
font-size: ${props => props.large ? 22 : 18 }px;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
`

function PriceTag({price, ...props}) {
  return (
    <Price {...props}>{price} €</Price>
  )
}

export default PriceTag
