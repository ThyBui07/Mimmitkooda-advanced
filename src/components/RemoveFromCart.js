import React, { useContext } from 'react'
import {ShopContext} from '../context'
import styled from 'styled-components'
import bin from '../images/bin.jpg'

const Bin = styled.img`
  width: 32px;
`

function ChangeCartQuantity({ item }) {
  const { updateLineItem } = useContext(ShopContext);

  return (
    <Bin src={bin} onClick={() => updateLineItem(item.id, 0)} />
  )
}

export default ChangeCartQuantity