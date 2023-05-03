import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyles';
import HomePage from './components/HomePage';
import WorksPage from './components/WorksPage';
import ExpertisePage from './components/ExpertisePage';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import particlesConfig from './components/particles-config';

import Sidebar from './components/Sidebar';





function App() {


    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const particlesInit = useCallback( async engine => {
        console.log(engine);
        await loadFull(engine);
    })

    const particlesLoaded = useCallback( async container => {
        await console.log(container);
    }, []);

    var innerWidth = window.innerWidth;
    
    window.addEventListener('resize', function() {
        return innerWidth ;
    });
   if ( innerWidth >= 1500) {
                return (
                    <>
                    <Particles id='tsParticles' params={particlesConfig} init={particlesInit} loaded={particlesLoaded} />
                    <Sidebar isOpen={isOpen} toggle={toggle}/>
                    <OuterWrapper>
                    <GlobalStyle></GlobalStyle>
                    <Wrapper>
                        <HomePage />
                        <WorksPage/>
                        <ExpertisePage /> 
                    </Wrapper>
                    </OuterWrapper> 
                    </>
                )
   }
           else if (innerWidth <= 1500 && innerWidth >= 1000) {
                return (
                    <>
                    <GlobalStyle></GlobalStyle>
                    <HomePage />
                    <WorksPage />
                    <ExpertisePage />
                    </>
                )
           }
            else {
                return null;
            }
    }


export default App;

const Wrapper = styled.div`
    display: flex;
    width: 400vw;
    flex-direction: row;
    transform: rotate(90deg) translateY(-100vh);
    transform-origin: top left;

    
    `
const OuterWrapper = styled.div`
    height: 100vw;
    width: 100vh;
    scroll-behavior: smooth;
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    `

