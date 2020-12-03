import styled from 'styled-components';
//contenedor 
import ImgBg from '../../images/principal-3.jpg'
import ImgBgMovil from '../../images/portada.jpg'


//CONTENEDOR InfoSectionNormal --> contiene imagen
export const InfoSec = styled.div`
    color: #95bed8; //color al marcar algo en la página
    padding: 40px 0;
    //primer color y segundo color del fondo del contenedor principal 
    background: ${({ lightBg }) => (lightBg ? '#95bed8' : '#95bed8')};
`;

//CONTENEDOR InfoSectionNormal --> contiene imagen
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
   
`;

//CONTENEDOR InfoSectionPrincipal ---> contiene la imagen
export const InfoSecImg = styled.div`
    color: #95bed8; //color al marcar algo en la página
    padding: 100px 0;
    //primer color y segundo color del fondo del contenedor principal 
    background: linear-gradient(to right, rgba(0,0,0,0.3),
    rgba(0,0,0,0.10)), url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size:cover;
    @media screen and (max-width: 768px){
        background: linear-gradient(to right, rgba(0,0,0,0.25),
    rgba(0,0,0,0.1)), url(${ImgBgMovil});
        padding-bottom:65px;
        height: 520px;
    }
`;

export const InfoColumn = styled.div`
    margin-top: 10px; //separacion del texto de inicio en la portada principal
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px){
        max-width:100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

// espacio del texto en el contenedor
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 100px;
    padding-bottom:60px;
    @media screen and (max-width: 768px){
        padding-top: 10px;
        padding-bottom:65px;
    }

`;
//contenedor de top line, " texto que va arriba de titulo"
export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#ffff' : '#4B59F7')};
    font-size: 18px;
    line-height: 10px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
     @media screen and (max-width: 768px){
        font-size: 12px;
        text-align: center;
    }
    
`;
// TITULO
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 50px;
    line-height: 1.1;

    // primera opcion de colores : texto -> TITULO
    color: ${({ lightText }) => (lightText ? '#ffff' : '#1c2237')};

    @media screen and (max-width: 768px){
        font-size: 30px;
        text-align: center;
    }
`;

// SUBTITULO
export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#ffff': '#1c2237')};
     @media screen and (max-width: 768px){
        font-size: 15px;
        text-align: center;
    }
`;
//contenedor de imagen
export const ImgWrapper = styled.div`
    max-width: 550px;
    display: flex;
    justify-content: ${({start})=>(start ?
    'flex-start': 'flex-end')};
`;
//imagen del contenedor
export const Img = styled.img`
    padding-right:0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;