import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import TopLine from './TopLine';
import ImgFallback from './ImgFallback';
import GSAP from './GSAP';

const WorksPage = () => {
  return (
    <Works id="works">
     <TopLine /> 
    
    <WorksWrapper>
        <GlobalFonts />
        <TitleWrapper>
        <WorksTitle>
            WORKS N PROJECTS
        </WorksTitle>
        <WorksImage>
            
        </WorksImage>
        <WorksText>
        Welcome to my WORKS section, where you can explore some of the most exciting IT frontend projects that I have worked on throughout my career. From developing user-friendly interfaces to delivering complex web applications, each project showcases my expertise in a range of frontend technologies and my commitment to delivering high-quality work.
        </WorksText>
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

const WorksImage = styled.div``

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
      font-size: 60px;
      color: #E1A10B;
      font-weight: 400;
      line-height: 0.9;
      `


const WorksText = styled.p`
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      color: #424242;
      font-weight: 400;
      line-height: 1.5;`



const ImgWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin-bottom: 15px;
    border-radius: 50%;

    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 10px rgba(0,0,0,0.2);
    }
    `


const ImgWithFallback = styled(ImgFallback)`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;

    
`

const SidebarWrapper = styled.div`
    float: right;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    `