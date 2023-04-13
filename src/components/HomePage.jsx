import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import selfie from '../assets/selfie.webp'
import selfieF from '../assets/selfie.png'
import ImgFallback from './ImgFallback';
import Navbar from './Navbar';
import TopLine from './TopLine';

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
            React Frontend Developer
          </Dev>
        </DevWrapper>
        <Navbar />
        <PhotoWrapper>
          <Photo src={selfie} fallback={selfieF} alt='selfie'/>
        </PhotoWrapper>
        
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
    margin-top: 64px;`

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
    margin-right: 158px;`

const Dev = styled.h2`
    font-family: 'TheSeasons';
    font-size: 64px;
    color: #E1A10B;
    font-weight: 400;
    `
const PhotoWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;`

const Photo = styled(ImgFallback)`
    height: 100%;
    width: 564px;
    margin-left: 112px;
    filter: drop-shadow(20px -20px 1px rgba(225, 161, 11, 25%)); 
    `