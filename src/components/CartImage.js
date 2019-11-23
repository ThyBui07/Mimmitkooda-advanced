import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 120px;
  height: 120px;
  vertical-align: middle;
`

function cartImage({ image }) {

  if(!image) return null

  return (
    <Img src={image.src} alt={image.altText} />
  )
}

export default cartImage
