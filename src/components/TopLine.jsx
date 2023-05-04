import React from 'react'
import styled from 'styled-components';
import lens from '../assets/lens.png';



const TopLine = () => {

  return (
    <Top >
        <TopLineContainer >
            
            <TopLineLeft>
                <TopLineLeftItem>
                <Logo src={lens}/>
                &lt; portfolio 23' /&gt;
            </TopLineLeftItem>
            </TopLineLeft>

            <TopLineTitle href='#home'>
                
                <Title>
                    DOWNAROWICZ
                </Title>
                
            </TopLineTitle>

            <TopLineRight>
                <Text>
                    Open for any collaborations <br></br>
                    and offers
                </Text>
            </TopLineRight>
          
        </TopLineContainer>
    </Top>
  )
}

export default TopLine;

const Top = styled.div`
    height: hug-content;`

const TopLineContainer = styled.div`
display: flex;
flex-direction: row;
padding: 16px 0;
margin-left: 48px;
margin-right: 48px;
isolation: isolate;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #E1E1E1;
`

const TopLineLeft = styled.div`
    align-items: flex-start;
    margin-left: 16px;
`

const TopLineLeftItem = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
font-family: 'Lato', sans-serif;
font-size: 18px;

@media screen and (max-width: 768px) {
    font-size: 0px;
}
`

const Logo = styled.img`
    width: 60px;
    height: 60px;

    @media screen and (max-width: 768px) {
        width: 30px;
        height: 30px;
    }
    `

const TopLineTitle = styled.a`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    padding: 8px 0
    left: calc(50% - 243px/2 + 0.5px);

    &:visited {
        color: #000000;
    }
    &:active {
        color: #000000;
    }
`

const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    font-size: 32px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

const TopLineRight = styled.div`
    align-items: flex-end;
    margin-right: 16px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
    `

const Text = styled.p`
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 16px; `