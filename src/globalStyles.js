import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500');
    ${reset};
    body{
        font-family: "Maven Pro", sans-serif;
        background-color: #ecf0f1;
    }
    a{
        color: inherit;
        text-decoration:none;
    }
`;