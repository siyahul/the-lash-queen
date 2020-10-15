import styled from 'styled-components';

export const FooterContainer = styled.div`
    display:flex;
    margin-left:auto;
    margin-right:auto;
    justify-self:center;
    align-items: center;
    justify-content:center;
    background:black;
    flex-direction:column;
    width:100%;
    height:100%
    min-height: 30vh;
`;

export const FooterItems = styled.div`
    height:100%;
    max-width:1200px;
    background: ;
    width:100%;
    background: linear-gradient(to bottom, #171201 0%, #000000 100%);
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around; 
`;

export const FooterList = styled.ul`
    margin: 20px;
    min-width:240px;
    list-style-type:none;
    justify-content:space-between;
    align-items:center;
    padding-left:25px;
    display:flex;
    flex-direction:column;
    
`;
export const FooterListHeading = styled.li`
    color:#fff;
    font-family: 'Dancing Script', cursive;
    color:#d4af37;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    
`;
export const FooterListItems = styled.li`
    color:#fff;
    font-family: 'Sansita Swashed', cursive;
    cursor:pointer;
    text-decoration: none;
    text-align: center;
`;

export const FooterDevInfo = styled.div`
    width: 100%;
    color:#fff;display: flex;
    justify-content: center;
    align-items: center;
    max-width:1200px;
`;