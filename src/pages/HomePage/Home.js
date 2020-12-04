import React from 'react';
import { ContenedorInicio, ContenedorNosotros} from './Data';
import { InfoSectionPrincipal, InfoSectionNormal } from '../../components';

const Home = () => {
    return (
        <>
            <InfoSectionPrincipal {...ContenedorInicio} />
            <InfoSectionNormal {...ContenedorNosotros} />  
        </> 
    );
};
export default Home;