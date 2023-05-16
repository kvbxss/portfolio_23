import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import TopLine from './TopLine';
import me from '../assets/me.png'

const HomePage = () => {
  return (
    <Home id='home'>
      <TopLine /> 
      <GlobalFonts />
      <NameWrapper>
        <Surname>
          Downarowicz
        </Surname>    
        <Name>
          Jakub
        </Name>
        </NameWrapper>
        <DevWrapper>
          <Dev>
            react frontend developer
          </Dev>
        </DevWrapper>
        <ImgTextWrap>
        <ImageWrapper>
          <Img src={me} alt='me'/>
        </ImageWrapper>
        <TextWrapper>
        <Text>
          Use menu to navigate
        </Text>
        </TextWrapper>
        </ImgTextWrap>
    </Home>
  )
}

export default HomePage;

const Home = styled.div`
    width: 100vw;
    white-space: nowrap;
`

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 112px;
    margin-top: 64px;
    `

const Surname = styled.h1`
    font-family: 'TanPearl';
    font-size: 100px;
    font-weight: 400;
    margin-right: 50px;
    color: #424242;
`
const Name = styled.h2`
    font-family: 'TanPearl';
    font-weight: 400;
    font-size: 75px;
    color: #424242;`

const DevWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 158px;
    `

const Dev = styled.h2`
    font-family: 'TheSeasons';
    font-size: 64px;
    color: #E1A10B;
    font-weight: 400;
    `


const ImgTextWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 50px;
`

const ImageWrapper = styled.div`
    width: 300px;
    border-radius: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 80px;
    padding-bottom: 50px;
    filter: blur(5px) drop-shadow(50px 4px 4px rgba(0, 0, 0, 0.25));
    transition: 0.5s;
    &:hover {
        filter: blur(0px) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`

const Img = styled.img`
    width: 400px;
    border-radius: 50%;
    border: 2px solid #E1E1E1;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    filter: grayscale(40%);
`

const TextWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-right: 158px;
    padding-left: 50px;
    margin-bottom: 80px;
    `

const Text = styled.h3`
    font-family: 'TheSeasons';
    font-size: 20px;
    color: #424242;
    font-weight: 400;`