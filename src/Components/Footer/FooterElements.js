import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    margin-left:auto;
    margin-right:auto;
    justify-self:center;
    align-items: center;
    justify-content:center;
    background:black;
    width:100%;
    
    height: 25vh;
`;

export const FooterItems = styled.div`
    height:100%;
    max-width:1200px;
    background: ;
    width:100%;
    background: linear-gradient(to bottom, #171201 0%, #000000 100%);
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around; 
`;

export const FooterList = styled.ul`
    list-style-type:none;
    justify-content:space-between;
    align-items:center;
    padding-left:25px;
    display:flex;
    flex-direction:column;
    
`;
export const FooterListHeading = styled.li`
    color:#fff;
    
`;
export const FooterListItems = styled.li`
    color:#fff;
    cursor:pointer;
`;