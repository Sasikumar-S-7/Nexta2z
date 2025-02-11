import React from 'react';
import Home from './Home';
import OurService from './OurServices';
import Achievements from './Achievements';
import Industries from '../../Product/BulkSms/Industries';
import Home1 from '../../Product/BulkSms/Home';
import Client from '../../Product/Clients';

const Service =()=>{
    return(
        <>
        
        {/* <h2>Service</h2> */}
        <Home/>
        <OurService/>
        <Achievements/>
        <Industries/>
        <Home1/>
        <Client/>



        </>
    )
}

export default Service