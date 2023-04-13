import React from 'react'
import styled from 'styled-components'


const Sidebar = () => {
  return (
    <Side>
      <SideElement >
        <Number>
          01
        </Number>
        
        <Text>
          Works
        </Text>
      </SideElement>
      
      <SideElement>
        <Number>
          02
        </Number>
        <Text>
          Expertise
        </Text>
      </SideElement>

      <SideElement>
        <Number>
          03
        </Number>
        <Text>
          Honors
        </Text>
      </SideElement>

      <SideElement>
        <Number>
          04
        </Number>
        <Text>
          Contact
        </Text>
      </SideElement>
    </Side>
  )
}

export default Sidebar

const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    width: 170px;
    z-index: 1;
    gap: 8px;
    `

const SideElement = styled.a`
      width: hug-content;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      
      `
const Number = styled.h1`
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      font-style: light;
      font-weight: 300;
      `
const Text = styled.h1`
      font-family: 'Lato', sans-serif;
      font-size: 18px;
      font-style: semi-bold;`