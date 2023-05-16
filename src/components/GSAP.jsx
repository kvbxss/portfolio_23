import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ImgFallback from './ImgFallback'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import florayslide from '../assets/slider/floray-slide-bg.jpg'
import mncentrumslide from '../assets/slider/mncentrum-slide-bg.jpg'
import MyWorks from './MyWorks'

gsap.registerPlugin(ScrollTrigger);



const GSAP = () => {

     

    

  return (
    <GsapContent>
        <Gallery id='testimonials'>
          
          
           <Img src={florayslide} id='3' alt='floray slide'/>
           
        </Gallery>
    </GsapContent>
  )
}

export default GSAP;

const GsapContent = styled.div`
    display: flex;
    border-right: 2px solid #E1E1E1;
    border-left: 2px solid #E1E1E1;
    margin-left: 50px;
    margin-right: 50px;
    
`

const Gallery = styled.div`
width: 100%;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;

`
const Img = styled.img`
margin: 20px;
padding-left: 20px;
padding-right: 20px;
height: 90%;
transition: 0.5s ease;
backface-visibility: hidden;
border-radius: 10px;
box-shadow: 0 0 20px rgba(0,0,0,0.15);
&:hover{
    transform: scale(1.05);
    cursor: pointer;
}
`



