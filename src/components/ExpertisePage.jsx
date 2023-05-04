import React from 'react'
import styled from 'styled-components'
import TopLine from './TopLine'
import Sidebar from './Sidebar'
import ImgFallback from './ImgFallback'

import {
    react, 
    reactF,
    js,
    jsF,
    html,
    htmlF,
    css,
    cssF,
    style,
    styleF,
    rest,
    restF,
    gatsby,
    gatsbyF,
    git,
    gitF,
    figma,
    figmaF
 } from '../assets/expertise'




const ExpertisePage = () => {
  return (
    <Expertise id='expertise'>
        <TopLine />
        <ExpertiseContainer>
          <TitleWrapper>
            <Title>
                My Expertise
            </Title>
            </TitleWrapper>
            <LineWrapper>
                
                <Element>
                    <ImgWFallback src={react} fallback={reactF} alt='react'/>
                </Element>
                <ElementTwo>
                    <ImgWFallback src={js} fallback={jsF} alt='js'/>
                </ElementTwo>
                    
                <Element>
                    <ImgWFallback src={html} fallback={htmlF} alt='html'/>
                </Element>
                    
                <ElementTwo>
                    <ImgWFallback src={css} fallback={cssF} alt='css'/>
                </ElementTwo>
                    
                <Element>
                    <ImgWFallback src={style} fallback={styleF} alt='styled-components' />
                </Element>

                <ElementTwo>
                    <ImgWFallback src={rest} fallback={restF} alt='rest'/>
                </ElementTwo>

                <Element>
                    <ImgWFallback src={gatsby} fallback={gatsbyF} alt='gatsby' />
                </Element>

                <ElementTwo>
                    <ImgWFallback src={git} fallback={gitF} alt='git'/>
                </ElementTwo>

                <Element>
                    <ImgWFallback src={figma} fallback={figmaF} alt='figma' />
                </Element>

            </LineWrapper>
          </ExpertiseContainer>
    </Expertise>
  )
}

export default ExpertisePage

const Expertise = styled.div`
    width: 100vw;
    height: 100vh;
`

const ExpertiseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    `

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;`

const Title = styled.h1`
    font-size: 144px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    color: #E1A10B;`

const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 32px;
    margin-top: 100px;
    margin-right: 100px;`

const Element = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 136px;
    height: 136px;
    background-color: #FFFFFF;
    border-radius: 10%;
    margin-bottom: 136px;
    transition: all 0.3s ease-in-out;
    filter: grayscale(90%);
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 10px rgba(0,0,0,0.2);
        filter: none;
    }
    `

const ElementTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 136px;
    height: 136px;
    background-color: #FFFFFF;
    border-radius: 10%;
    margin-top: 136px;
    transition: all 0.3s ease-in-out;
    filter: grayscale(90%);
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 10px rgba(0,0,0,0.2);
        filter: none;
    }
    
    `

const ImgWFallback = styled(ImgFallback)`
    width: 120px;
    
    `