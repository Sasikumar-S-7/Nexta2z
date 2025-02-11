
// import Banner1 from '../../image/Bulk Sms.png'
import Home from './Home'
import Details from './Details'
import Pricing from './Pricing'
import Client from '../Clients'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { voicecall } from '../../Resources/FAQ/FaqData'
// import Apisupport from '../Apisupport'
// import FAQ from './FAQ'

const VoiceCall = () => {
  return (
   <>
     <div>
       {/* <img src={Banner1} alt='Bulk Voice Call' width={'100%'} /> */}
     </div>

     <Home/>
     <Details/>
     <Client/>
     <Pricing/>
     <SocialMedia/>
     <FAQHome data={voicecall}/>
     {/* <FAQ/> */}
   </>
  )
}

export default VoiceCall
