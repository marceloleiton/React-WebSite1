import React from 'react'; 
import {Link} from 'react-router-dom';
import { Container, Button } from "../../globalStyles";

import AnimatedShowMore from 'react-animated-show-more';
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    SubTitle2,
    ImgWrapper,
    Img
} from './InfoSection.elements';

const InfoSectionNormal =({ primary,lightBg, imgStart,lightTopLine,lightTextDesc,
    buttonLabel, description, description2,headLine,lightText,topLine,img,alt,start}) =>{
    return (
        <>
            <InfoSec lightBg={lightBg}>
  
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>     
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                               {/* <AnimatedShowMore
                                    height={130}
                                    toggle={({ isOpen }) => isOpen ? 'Ocultar!' : '... Ver más'}
                                    speed={20}
                                    shadowColor="transparent">

                                    {/* Lots of stuff goes here */}
                                <Heading lightText={lightText}>{headLine}</Heading>                        
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <SubTitle2 lightTextDesc={lightTextDesc}>{description2}</SubTitle2>
                                {/* <Link to='/contacto'>
                                    <Button big fontBing primary={primary}>{buttonLabel}</Button>
                                </Link>
                                {/*</AnimatedShowMore>   */}
                            </TextWrapper>
                            
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt}/>
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
                
            </InfoSec>            
        </>

    );
};

export default InfoSectionNormal;


