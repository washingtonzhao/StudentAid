import { createGlobalStyle } from "styled-components";

/* Importing fonts */
import BauBold from "../assets/fonts/Bau-Bold.otf";
import "../assets/fonts/Bau-Medium.otf";
import "../assets/fonts/Bau-Regular.otf";
import "../assets/fonts/Tiempos.otf";
import "../assets/fonts/TiemposHeadline-Black.otf";
import "../assets/fonts/TiemposHeadline-Bold.otf";
import "../assets/fonts/TiemposHeadline-Light.otf";
import "../assets/fonts/TiemposHeadline-Medium.otf";
import "../assets/fonts/TiemposHeadline-Regular.otf";
import "../assets/fonts/TiemposHeadline-Semibold.otf";
import "../assets/fonts/TiemposText-Bold.otf";
import "../assets/fonts/TiemposText-Italic.otf";
import "../assets/fonts/TiemposText-Regular.otf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Bau-Bold';
        src: url(${BauBold}) format('otf'),
        font-style: normal;
        font-weight: bold;
    }
    
`;
