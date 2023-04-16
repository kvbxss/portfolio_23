import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import TopLine from './components/TopLine';
import { GlobalStyle } from './GlobalStyles';
import HomePage from './components/HomePage';
import WorksPage from './components/WorksPage';
import ExpertisePage from './components/ExpertisePage';

function App() {

    var innerWidth = window.innerWidth;
    
    window.addEventListener('resize', function() {
        return innerWidth ;
    });
   if ( innerWidth >= 1500) {
                return (
                    <OuterWrapper>
                    <GlobalStyle></GlobalStyle>
                    <Wrapper>   
                        <HomePage />
                        <WorksPage/>
                        <ExpertisePage />
                    </Wrapper>
                    </OuterWrapper> 
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
    transform: rotate(-90deg) translateX(-100vh);
    transform-origin: top left;
    overflow-x: hidden;
    overflow-y: scroll;
    position: absolute;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    `