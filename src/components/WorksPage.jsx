import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import TopLine from './TopLine';
import ImgFallback from './ImgFallback';
import GSAP from './GSAP';

import worksprojects from '../assets/worksprojects.webp';
import worksprojectsF from '../assets/worksprojects.png';

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
        <WorksImage>
            <ImgWithFallback src={worksprojects} fallback={worksprojectsF} alt='works'/>
            </WorksImage>
        <WorksText>
        Welcome to my WORKS section, where you can explore some of the most exciting it frontend projects that I have worked on throughout my career. From developing user-friendly interfaces to delivering complex web applications, each project showcases my expertise in a range of frontend technologies and my commitment to delivering high-quality work.        </WorksText>
        </TitleWrapper>
        <SliderWrapper>
            <GSAP />
        </SliderWrapper>
        <ScrollWrapper>
        <WorksText>
            Scroll down to see more...
        </WorksText>
        </ScrollWrapper>
        {/* <TextWrapper>
        <WorksTitle>
            Works
        </WorksTitle>
        <WorksTextWrapper>
        <WorksText>
        Welcome to my WORKS section, where you can explore some of the most exciting IT frontend projects that I have worked on throughout my career. From developing user-friendly interfaces to delivering complex web applications, each project showcases my expertise in a range of frontend technologies and my commitment to delivering high-quality work.
        </WorksText>
        </WorksTextWrapper>
        </TextWrapper>
        <WorksYears>
            <YearCard>
              <ImgWrapper>
              <ImgWithFallback src={mncentrum} fallback={mncentrumF} alt='2022' />
              </ImgWrapper>
              2022 <br />
              4 projects
            </YearCard>
            <YearCard>
              <ImgWrapper>
              <ImgWithFallback src={floray} fallback={florayF} alt='2023'/>
              </ImgWrapper>
              2023 <br />
              2 projects
            </YearCard>
        </WorksYears> */}
        
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
    `

const SliderWrapper = styled.div`
    float: left;
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overlow-x: scroll;
    overflow-y: auto;
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
      margin-bottom: 100px;
      `


const WorksText = styled.p`
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      color: #424242;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.02em;
      `



const WorksImage = styled.div`
    width: 150px;
    height: 150px;
    z-index: -2;
    position: absolute;
    margin-left: 5px;
    margin-bottom: 200px;
    `


const ImgWithFallback = styled(ImgFallback)`
    width: 150px;
    height: 150px;
    object-fit: cover;
    filter: grayscale(90%);
    
`

const SidebarWrapper = styled.div`
    float: right;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    `