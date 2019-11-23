import React from 'react'
import banner from '../images/hero.jpg'
import styled from 'styled-components'

const Img = styled.img`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  top: 0;
  margin-bottom: 24px;
  height: 600px;
  object-fit: cover;
`

function Banner() {
  return (
    <Img src={banner} alt='Banner' />
  )
}

export default Banner
