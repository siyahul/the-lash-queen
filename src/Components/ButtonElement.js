import styled from 'styled-components';
//import {Link as LinkS} from 'react-scroll';

export const Button = styled.a`
    border-radius:50px;
    background: ${({primary})=> (primary ? '#BD8E02': '#010606')};
    white-space:nowrap;
    padding: ${({big})=> (big ? '14px 48px': '12px 38px')};
    color: ${({dark})=> (dark ? '#010606':'#fff')};
    font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
    outline: none;
    border:none;
    cursor: pointer;
    text-decoration: none;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary})=>(primary ? '#ffff' : '#01bf71' )};
    }
`;