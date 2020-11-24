import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { FaGratipay } from 'react-icons/fa'
import { Link } from 'react-router-dom';
//to to use my styled in terminal : npm install --save styled-components

//Navegación principal "menú de la página"
export const Nav = styled.nav`
background:#0455BF ; // color del menu de la página
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


//redireccionamiento en el logo de la página
export const NavLogo= styled(Link)`
color:#fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`;
//logo de la página
export const NavIcon = styled(FaGratipay)`
margin-right:0.5rem;
`;
export const MobileIcon = styled.div`
    display:none;
    @media screen and (max-width:960px ){
        display:block;
        position: absolute;
        top:1.5rem;
        right: 1rem;
        transform: traslate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
}
`;


//menú de navegación
export const NavMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    //formato movil
    @media screen and (max-width:960px){
        display: flex;
        flex-direction: column;
        width:100%;
        height:90vh;
        position: absolute;
        top:80px;
        //barra de menu responsive, si se clickea se activa, pero si el valor del click es cero quiero se desaparezca
        left:${({click}) =>(click ? 0:'-100%')};
        opacity:1;
        transition:all 0.5s ease;
        background: #0455BF; //color de la barra menu responsive
    }`;

//lo que contiene el manu de navegación
export const NavItem = styled.li`
        height:80px;
        border-bottom: 2px solid transparent;

        &:hover{
            //color que se selecciona cuando se pasa e cursor sobre los links en la pagina
            border-bottom: 3px solid  #0467FB;
        }
        //formato movil
        @media screen and (max-width:960px){
            width:100%;
            &:hover{
                border: none;
            }
        }
    
`;
//Links Navegacion parte web normal
export const NavLinks = styled(Link)`
    color: #fff; //color blanco para los destinos a paginas en la vista normal
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    //links Navegacion parte responsive
        @media screen and (max-width:960px){
            text-align: center;
            align-items:center;
            padding: 2rem;
            width:100%;
            display: table;
            &:hover{
                //color al momento de pasar el cursor por el menu responsive en los links
                color: #0467FB;
                transition: all 0.2s ease;
            }
        }
    `;
    export const NavItemBtn= styled.li`
        @media screen and (max-width:960px){
            display: flex;
            justify-content: center;
            align-items: center;
            width:100%;
            height:120px;
        }
    `;


    export const NavBtnLink=styled(Link)`
        display: flex;
        justify-content: center;
        align-items:center;
        text-decoration: none;
        padding: 8px 16px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;

`;

