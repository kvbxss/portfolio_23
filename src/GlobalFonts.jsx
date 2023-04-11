import TanPearl from './fonts/TanPearl/TAN-PEARL.otf';
import TheSeasons from './fonts/TheSeasons/TheSeasonsLight.ttf';
import {createGlobalStyle} from 'styled-components';


export const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'TanPearl';
    src: local('TanPearl'), url(${TanPearl}) format('opentype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'TheSeasons';
    src: local('TheSeasons'), url(${TheSeasons}) format('truetype');
    font-weight: 300;
    font-style: light;
}

`
