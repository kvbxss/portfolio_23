import React from 'react'
import styled from 'styled-components'
import TopLine from './TopLine'
import Sidebar from './Sidebar'

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
                    <Line />
                </Element>

                <Element>
                    <Line />
                </Element>

                <Element>
                    <Line />
                </Element>

                <Element>
                    <Line />
                </Element>

                <Element>
                    <Line />
                </Element>
            </LineWrapper>
        
        <SidebarWrapper>        
          <Sidebar />
          </SidebarWrapper>
          </ExpertiseContainer>
    </Expertise>
  )
}

export default ExpertisePage

const Expertise = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const ExpertiseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;`

const Title = styled.h1`
    font-size: 144px;
    font-family: 'Playfair Display', serif;
    font-weight: 400;`

const LineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    gap: 8px;`

const Element = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 136px;
    `

const Line = styled.div`
    position: absolute;
    width: 832px;
    height: 0px;
    border: 1px solid #A1A1A1;
    transform: rotate(90deg);`

const SidebarWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;`

