import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: linear-gradient(to bottom, #171201 0%, #000000 100%);
    height:80px;
    margin-top: 0px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:5;
    
    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;

    @media screen and (max-width:360px){
        padding : 0 18px;
        padding-left: 4px;
    }
`;

export const NavLogo = styled(LinkR)`
    font-family:'Dawning of a New Day', cursive;
    color:#fff;
    justify-self:flex-start;
    cursor:pointer;
    font-size:2rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:normal;
    text-decoration:none;
    
    @media screen and (max-width:400px){
        margin-left:0;
        padding-left:0;
    }
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width:854px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%,60%);
        cursor:pointer;
        font-size:1.8rem;
        color:#fff;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media (max-width:854px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`
export const NavLinks = styled(LinkR)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom:3px solid #01bf71;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: centre;
    margin-right:10px;

    @media (max-width:854px){
        display:none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background: #d4af37;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#99611f;
        color:#d4af37;
    }
`;