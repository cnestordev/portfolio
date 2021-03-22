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
  Info,
} from '../styles/carousel'

const Carousel = props => {
  const [images, setImages] = useState([
    './carousel/posts.gif',
    './carousel/postdetail.gif',
    './carousel/create.gif',
    './carousel/account.gif',
    './carousel/darkmode.gif',
  ])
  const [description, setDescription] = useState([
    'View, like, and dislike posts',
    'Comment on posts that interest you',
    'Create your own post and share it with others',
    'View and manage your post/comment history',
    'Toggle between dark and light mode!',
  ])
  const [currentIndex, setCurrentIndex] = useState(0)

  const [loaded, hasLoaded] = useState(false)

  const handleClick = index => {
    setCurrentIndex(index)
  }

  const handleNext = direction => {
    const limit = images.length
    let currentPosition = currentIndex
    const nextPosition = Number(currentPosition + direction)

    if (!(nextPosition < 0) && nextPosition < limit) {
      setCurrentIndex(nextPosition)
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
        <Arrow disabled={currentIndex === 0} onClick={() => handleNext(-1)}>
          <i className="fas fa-arrow-left"></i>
        </Arrow>
        <Img
          loaded={loaded}
          onLoad={() => hasLoaded(true)}
          src={images[currentIndex]}
        />
        <Box loaded={loaded} />
        <Arrow
          disabled={currentIndex === images.length - 1}
          onClick={() => handleNext(+1)}
        >
          <i className="fas fa-arrow-right"></i>
        </Arrow>
      </Body>
      <Info>
        <p>{description[currentIndex]}</p>
      </Info>
      <NavBtns>
        {images.map((item, index) => (
          <NavBtn
            current={index === currentIndex}
            onClick={() => handleClick(index)}
            key={index}
          ></NavBtn>
        ))}
      </NavBtns>
    </Root>
  )
}

export default Carousel
