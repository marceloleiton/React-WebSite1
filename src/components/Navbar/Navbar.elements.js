import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { FaGratipay } from 'react-icons/fa'
import { Link } from 'react-router-dom';
//to to use my styled in terminal : npm install --save styled-components
export const Nav = styled.nav`
background: #0468BF;
height:80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 99;

`
export const NavbarContainer= styled(Container)`
display: flex;
justify-content: space-between;
height:80px;

${Container}
`;
export const NavLogo= styled(Link)`
color:#fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`;
export const NavIcon = styled(FaGratipay)`
margin-right:0.5rem;
`;
export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:960px ){
        display:block;
        position: absolute;
        top:0;
        right: 0;
        transform: traslate(-100%, 60%);
        font-size:1.8rem;
        cursor: pointer;
}
`;

