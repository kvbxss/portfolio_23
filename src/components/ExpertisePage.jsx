import React from 'react'
import TopLine from './TopLine'

const ExpertisePage = () => {
  return (
    <Expertise id='expertise'>
        <TopLine />
        <ExpertiseContainer>
            <Title>
                My Expertise
            </Title>
            <LineWrapper>
                <Element>
                    <Line />
                </Element>
            </LineWrapper>
        </ExpertiseContainer>
        <SidebarWrapper>        
          <Sidebar />
          </SidebarWrapper>
    </Expertise>
  )
}

export default ExpertisePage