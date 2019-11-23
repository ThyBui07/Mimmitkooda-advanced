import React, { useContext } from 'react'
import {ShopContext} from '../context'
import styled from 'styled-components'

const Input = styled.input`
	background: #FFFFFF;
	border: 1.5px solid #AAAAAA;
	box-sizing: border-box;
	border-radius: 8px;
	width: 50px;
	height:28px;
	padding: 0;
	margin: 0;
	font-size:14px;
	text-align:center;
	
`

function ChangeCartQuantity({ item }) {
  const { updateLineItem } = useContext(ShopContext);
  
  const handleInputChange = (e) => {
    updateLineItem(item.id, +e.target.value)
  };

  return (
    <Input onChange={handleInputChange} placeholder={item.quantity} />
  )
}

export default ChangeCartQuantity