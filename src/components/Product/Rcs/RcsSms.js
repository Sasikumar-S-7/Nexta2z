import React from 'react'
import Home from './Home'
import ComparisonTable from './ComparisonTable'
import RcsMessagingSection from './RcsMessagingSection'
import Client from '../Clients'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { RcsData } from '../../Resources/FAQ/FaqData'
// import FAQ from './RcsFaq'


const RcsSms = () => {
  return (
    <div>
      <Home/>
      <ComparisonTable/>
      <Client/>      
      <RcsMessagingSection/>
      <SocialMedia/>
      {/* <FAQ/> */}
      <FAQHome data={RcsData}/>
    </div>
  )
}

export default RcsSms
