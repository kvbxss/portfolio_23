import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <NavbarContainer>
      
        <NavElement>
          <Number>
            01
          </Number>
          <Text>
            Works
          </Text>
        </NavElement>
      
        <NavElement>
          <Number>
            02
          </Number>
          <Text>
            Expertise
          </Text>
        </NavElement>
     
        <NavElement>
          <Number>
            03
          </Number>
          <Text>
            Honors
          </Text>
          </NavElement>
       
          <NavElement>
          <Number>
            04
          </Number>
          <Text>
            Contact
          </Text>
          </NavElement>
           
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
    margin-top: 364px;
    display: flex;
    width: 100vw;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    gap: 25px;
    padding: 0 112px;`

const NavElement = styled.div`
      width: hug-content;
      height: hug-content;
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