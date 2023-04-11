import React from 'react'
import styled from 'styled-components';
import TopLine from './components/TopLine';
import { GlobalStyle } from './GlobalStyles';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';

function App() {
    return (
        <>
        <TopLine />
        <OuterWrapper>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
        <HomePage />
        <WorksPage />
        </Wrapper>
        </OuterWrapper>
        </>
    );
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
    }`