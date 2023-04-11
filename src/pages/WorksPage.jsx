import React from 'react'
import styled from 'styled-components'
import { GlobalFonts } from '../GlobalFonts';

const WorksPage = () => {
  return (
    <Works>
      
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
              <ImgWrapper />
              2022 <br />
              4 projects
            </YearCard>
            <YearCard>
              <ImgWrapper />
              2023 <br />
              4 projects
            </YearCard>
        </WorksYears>
        
    </Works>
  )
}

export default WorksPage;

const Works = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
    height: 100vh;
    width: 100vw;
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
      font-size: 112px;
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
    gap: 150px;`

const YearCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 300px;
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 300;`

const ImgWrapper = styled.div`
    width: 250px;
    height: 250px;`