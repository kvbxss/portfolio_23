import React from 'react'
import styled from 'styled-components'
import TopLine from './TopLine'

const AboutPage = () => {
  return (
    <About id="about">
      <TopLine />
      <AboutWrapper>
        <ImageWrapper>
          <Img/>
        </ImageWrapper>
        <TextWrapper>
          <Text>
          About Me
          </Text>
        </TextWrapper>
      </AboutWrapper>
    </About>
  )
}

export default AboutPage;

const About = styled.div`
width: 100vw;
height: 100vh;
`

const AboutWrapper = styled.div``

const ImageWrapper = styled.div``

const Img = styled.img`
    width: 100%;`

const TextWrapper = styled.div`
    display: flex;
    padding-top: 100px;
    justify-content: center;
    align-items: center;
`

const Text = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 144px;
    font-weight: 400;
`

