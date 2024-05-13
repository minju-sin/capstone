// footer 스타일 
import styled from "styled-components";

export const StyledBottomNavigation = styled.div`
    width: 100%;
    height: 60px;
    background-color: #e9e9e9;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const StyledBottomNavigationA = styled.a`
    color: #192287;
    text-decoration: none;
    font-size: 16px;
    font-weight: bolder;
    padding: 10px;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        background-color: #c5c5c5;
    }
`;

export const StyledIcon = styled.img`
    width: 30px;
    height: 30px;
`;