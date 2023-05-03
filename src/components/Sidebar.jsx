import React, { useState } from 'react'
import styled from 'styled-components'
import { BiHomeAlt } from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import { FaTimes, FaBars } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { BsDisplay } from "react-icons/bs"
import { AiOutlinePhone } from "react-icons/ai"


const Sidebar = ({isOpen, toggle}) => {
  const [activeNav, setActiveNav] = useState('')

  

  const SidebarContent = () => {
  switch (isOpen) {
    case true:
      return(
        <Side isOpen={isOpen}>
          <NavLinks href="#home" 
                className={activeNav === '#home' ? 'active' : ''}><BiHomeAlt/></NavLinks>
            
                <NavLinks href="#works" onClick={() => setActiveNav('#works')} className={activeNav === '#works' ? 'active' : ''}><BsDisplay/></NavLinks>
            
                <NavLinks href="#expertise" onClick={() => setActiveNav('#expertise')} className={activeNav === '#expertise' ? 'active' : ''}><GiSkills/></NavLinks>
            
                <NavLinks href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></NavLinks>
            
                <NavLinks href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></NavLinks>           
     
                <NavLinks onClick={toggle}><FaTimes /></NavLinks>

        </Side>
      )
  
      case false:
      return(
        <Side isOpen={isOpen}>
        <NavButton onClick={toggle}>
        <FaBars />
      </NavButton>
        </Side>
      )
    default:
      break;
  }
}
  return (
    <>
    
    
      <SidebarContent />
    
    </>
  )
}

export default Sidebar

const Side = styled.div`
background: rgba(0, 0, 0, 0.3);
width: max-content;
display: block;
padding: 0.5rem 1rem;
z-index: 2;
position: fixed;
left: 95%;
transform: translateX(-50%);
bottom: 2rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
border-radius: 2rem;
backdrop-filter: blur(15px);
transition: 0.3s;
`

const NavButton = styled.button`
background: transparent;
padding: 0.9rem;
border-radius: 50%;
display: flex;
color: var(--color-light);
font-size: 1.1rem;
transition: 0.3s;

&:hover {
    background: rgba(255, 180, 28, 0.13);
}

&:active {
    background: var(--color-bg);
    color: var(--color-white);
}
`

    const NavLinks = styled.a`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;

    &:hover {
        background: rgba(255, 180, 28, 0.13);
    }

    &:active {
        background: var(--color-bg);
        color: var(--color-white);
    }
`
