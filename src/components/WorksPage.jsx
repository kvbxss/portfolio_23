import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import TopLine from './TopLine';
import GSAP from './GSAP';


const WorksPage = () => {
  return (
    <Works id="works">
     <TopLine /> 
    
    <WorksWrapper>
        <GlobalFonts />
        <TitleWrapper>
        
        <WorksTitle>
             
            Works & Projects
            
        </WorksTitle>
       
        <WorksText>
        Welcome to my WORKS section, where you can explore some of the most exciting it frontend projects that I have worked on throughout my career. From developing user-friendly interfaces to delivering complex web applications, each project showcases my expertise in a range of frontend technologies and my commitment to delivering high-quality work.        </WorksText>
        </TitleWrapper>
        <SliderWrapper>
            <GSAP />
        </SliderWrapper>
        <ScrollWrapper>
        <WorksText>
            Click on the picture to see more...
        </WorksText>
        </ScrollWrapper>
          </WorksWrapper>
    </Works>
  )
}

export default WorksPage;

const Works = styled.div`
    width: 100vw;
    height: 100vh;
    `

const WorksWrapper = styled.div`
    float: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;

`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 50px;
    width: 25%;
    
    margin-top: 300px;
    `

const SliderWrapper = styled.div`
    float: left;
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const ScrollWrapper = styled.div`
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15%;
    border-left: 1px solid #E1E1E1;
    padding-right: 20px;


`

const WorksTitle = styled.h1`
      font-family: 'Playfair Display', serif;
      font-size: 90px;
      color: #E1A10B;
      font-weight: 400;
      line-height: 0.9;
      letter-spacing: -0.05em;
      `


const WorksText = styled.p`
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      color: #424242;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.02em;
      `