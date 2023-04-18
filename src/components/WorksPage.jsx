import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';
import Sidebar from './Sidebar';
import TopLine from './TopLine';
import ImgFallback from './ImgFallback';
import floray from '../assets/floray.webp'
import florayF from '../assets/floray.png'
import mncentrum from '../assets/mncentrum.webp'
import mncentrumF from '../assets/mncentrum.jpg'

const WorksPage = () => {
  return (
    <Works id="works">
    <TopLine />
    <WorksWrapper>
        <GlobalFonts />
        <TextWrapper>
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
        </WorksYears>
        <SidebarWrapper>        
          <Sidebar />
          </SidebarWrapper>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 150px;
    `

const WorksTitle = styled.h1`
      font-family: 'Playfair Display', serif;
      font-size: 144px;
      color: #E1A10B;
      font-weight: 400;
      `

const WorksTextWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 600px;
      margin-top: 100px;`


const WorksText = styled.p`
      font-family: 'Lato', sans-serif;
      font-size: 24px;
      color: #424242;
      font-weight: 400;
      line-height: 1.5;`

const WorksYears = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 150px;
    margin-top: 84px;`

const YearCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 300px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5;
    border-radius: 50%;
    

    `

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
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;`