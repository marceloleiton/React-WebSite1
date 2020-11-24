import styled from 'styled-components';
//contenedor 
export const InfoSec = styled.div`
    color: #95bed8; //color al marcar algo en la página
    padding: 40px 0;
    //primer color y segundo color del fondo del contenedor principal 
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#ffff')};
`;
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
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
    padding-top: 0;
    padding-bottom:60px;
    @media screen and (max-width: 768px){
        padding-bottom:65px;
    }

`;
//contenedor de top line, " texto que va arriba de titulo"
export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#95bed8' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;
// TITULO
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;

    // primera opcion de colores : texto -> TITULO
    color: ${({ lightText }) => (lightText ? '#95bed8' : '#1c2237')};
`;

// SUBTITULO
export const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#95bed8': '#1c2237')};
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