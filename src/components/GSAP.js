import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ImgFallback from './ImgFallback'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import florayslide from '../assets/slider/floray-slide-bg.jpg'
gsap.registerPlugin(ScrollTrigger);



const GSAP = () => {

    
   

        const tl = gsap.timeline();

        tl.to(".testimonials",{x: -window.innerWidth})


        ScrollTrigger.create({
            animation: tl,
            trigger: ".testimonials",
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            pin: true,

        }
        )
   

  return (
    <GsapContent>
        <Gallery id='testimonials'>
           <Img src={florayslide} id='1' alt='floray slide'/>
           <Img src={florayslide} id='2' alt='floray slide'/>
           <Img src={florayslide} id='3' alt='floray slide'/>
           <Img src={florayslide} id='4' alt='floray slide'/>
           <Img src={florayslide} id='5' alt='floray slide'/>
        </Gallery>
    </GsapContent>
  )
}

export default GSAP;

const GsapContent = styled.div`
    display: flex;
    border-right: 1px solid #E1E1E1;
    border-left: 1px solid #E1E1E1;
    margin-left: 50px;
    margin-right: 50px;
    
`

const Gallery = styled.div`
width: 100%;
height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
display: flex;
overflow: hidden;

`
const Img = styled.img`
margin: 20px;
padding-left: 20px;
padding-right: 20px;
width: 100%;
transition: 0.5s ease;
backface-visibility: hidden;
border-radius: 10px;
box-shadow: 0 0 20px rgba(0,0,0,0.15);
&:hover{
    transform: scale(1.05);
    cursor: pointer;
}
`



