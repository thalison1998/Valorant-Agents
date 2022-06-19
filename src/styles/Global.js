import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {

}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
    font-family: 'Roboto';
    
}

html{
    font-size: 62.5%;
    
}
    
    @media (max-width: 720px) {
        html{
           font-size:57.6925%; 
        }
    }

body{
        font-size:1.4rem;
        -webkit-font-smoothing:antialiased;
}

img{
    display:block;
    max-width:100%;
}

button{
    cursor:pointer;
}

`;