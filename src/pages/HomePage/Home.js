import React from 'react';
import { homeObjOne, homeObjTwo} from './Data';
import { InfoSectionPrincipal, InfoSectionNormal } from '../../components';

const Home = () => {
    return (
        <>
        <InfoSectionPrincipal {...homeObjOne} />
        <InfoSectionNormal {...homeObjTwo} />  
        </> 
    );
};
export default Home;