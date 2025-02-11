import React from 'react'
// import Home from './Home'
import Services from './Services'
// import Pricing from './Pricing'
import PricingTabs from './Pricing'
import Client from '../Clients'
import Industries from './Industries'
import Reviews from './Reviews'
// import Banner from '../../image/Bulk Sms.png'
import Features from './Features'
// import FAQ from './Faq'
import BulkSmsHome from './BulkSmsHome'
import SocialMedia from '../SocialMedia'
import { bulkSmsData } from '../../Resources/FAQ/FaqData'
import FAQHome from '../../Resources/FAQ/FAQHome'

const BulkSms = () => {
  return (
    <div>
      {/* <img src={Banner}  width={'100%'} alt='Bulk sms banner'/> */}
      <Services/>
      <Client/>
      <PricingTabs/>
      <Reviews/>
      <BulkSmsHome/>
      <SocialMedia/>
      {/* <Home/> */}
      <Industries/>
      <Features/>
      <FAQHome data={bulkSmsData}/>
      {/* <FAQ/> */}
    </div>
  )
}

export default BulkSms
