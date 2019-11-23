import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
`

function ProductImage({ image }) {

  if(!image) return null

  return (
    <Img src={image.src} loading="lazy" alt={image.altText} />
  )
}

export default ProductImage
