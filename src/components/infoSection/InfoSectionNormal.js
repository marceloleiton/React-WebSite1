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
    ImgWrapper,
    Img
} from './InfoSection.elements';

const InfoSectionNormal =({ primary,lightBg, imgStart,lightTopLine,lightTextDesc,
    buttonLabel, description,headLine,lightText,topLine,img,alt,start}) =>{
    return (
        <>
            <InfoSec lightBg={lightBg}>
  
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>     
                                <Heading lightText={lightText}>{headLine}</Heading>                        
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
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


