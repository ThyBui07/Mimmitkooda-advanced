import React, { Component } from 'react'
import styled from 'styled-components'
import 'whatwg-fetch'

const ImageList = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`

const Image = styled.img`
  width: 25%;
  margin: 0;
  padding: 0;
  object-fit: cover;
  height: 250px;
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0.8;
  transform: scale(1);
  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }

  @media screen and (max-width: 480px) {
    width: 50%;
  }
`

export class Instagram extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: null,
    }
  }

  componentDidMount() {
    fetch('http://www.mocky.io/v2/5dc56b2d3200007d00769a5a')
      .then(response => response.json())
      .then(data => this.setState({ images: data.images }));
  }


  render() {
    const { images } = this.state;
    return (
      <ImageList>
        {images && images.map(image => (
          <Image key={image.id} alt={image.id} src={image.src} />
        ))}
      </ImageList>
    )
  }
}

export default Instagram