import React, { useState } from 'react'

import {
  Root,
  Header,
  Body,
  Btn,
  Img,
  NavBtns,
  NavBtn,
  Arrow,
  Box,
} from '../styles/carousel'

const Carousel = props => {
  const [images, setImages] = useState([
    'https://i.ibb.co/z4wh8zx/thread.jpg',
    'https://i.ibb.co/Ln8tJkF/thread2.jpg',
  ])
  const [currentImg, setCurrentImg] = useState(0)
  const [loaded, hasLoaded] = useState(false)

  const handleClick = index => {
    setCurrentImg(index)
  }

  const handleNext = direction => {
    const limit = images.length
    let currentPosition = currentImg
    const nextPosition = Number(currentPosition + direction)

    if (!(nextPosition < 0) && nextPosition < limit) {
      setCurrentImg(nextPosition)
    }
  }
  return (
    <Root>
      <Header>
        <Btn color={'#ff622e'}></Btn>
        <Btn color={'#ffa62e'}></Btn>
        <Btn color={'#55cc43'}></Btn>
      </Header>
      <Body>
        <Arrow disabled={currentImg === 0} onClick={() => handleNext(-1)}>
          <i className="fas fa-arrow-left"></i>
        </Arrow>
        <Img
          loaded={loaded}
          onLoad={() => hasLoaded(true)}
          src={images[currentImg]}
        />
        <Box loaded={loaded} />
        <Arrow
          disabled={currentImg === images.length - 1}
          onClick={() => handleNext(+1)}
        >
          <i className="fas fa-arrow-right"></i>
        </Arrow>
      </Body>
      <NavBtns>
        {images.map((item, index) => (
          <NavBtn
            current={index === currentImg}
            onClick={() => handleClick(index)}
            key={index}
          ></NavBtn>
        ))}
      </NavBtns>
    </Root>
  )
}

export default Carousel
