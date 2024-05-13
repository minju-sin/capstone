// header 스타일 
import styled from "styled-components";

export const StyledStatusBar = styled.div`
    width: 100%;
    height: 20px;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const StyledNavigaionBarAfter = styled.div`
    content: "";
    display: block;
    width: 30%;
    height: 3px;
    position: fixed;
    top: 60px;
    left: 35%;
    z-index: 100;
    background-color: #FA6511;
`;