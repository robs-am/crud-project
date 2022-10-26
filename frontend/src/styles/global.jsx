import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    font-family:"figtree", sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: "center";
    background-color:"#f9f9";
    color:"#161616";
    

}



`;

export default Global;