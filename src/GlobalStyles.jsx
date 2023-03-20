import {createGlobalStyle} from 'styled-components';
import bg from './assets/bg.png';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
        list-style: none;
        text-decoration: none;
    }
    
    html{
        scroll-behavior: smooth;
    }

    body {
        background-image: url(${bg});
    }
    
    ::-webkit-scrollbar {
        display: none;
    }`