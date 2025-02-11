
import Home from './Home'
import ComparisonTable from './ComparisonTable'
import Client from '../Clients'
import StepsSection from './StepsSection'
// import Faq from './Faq'
import Features from './Features'
import Apisupport from '../Apisupport'
import SocialMedia from '../SocialMedia'
import FAQHome from '../../Resources/FAQ/FAQHome'
import { Whatsapp } from '../../Resources/FAQ/FaqData'
import PricingTabs from './WhatsappPricing'
// import banner from '../../image/'

const WhatsappApi = () => {
  return (
    <div>
      <Home/>
      <Client/>
      <ComparisonTable/>
      <PricingTabs/>
      <Apisupport/>
      <StepsSection/>
      <Features/>
      <SocialMedia/>
      <FAQHome data={Whatsapp}/>

      {/* <Faq/> */}

    </div>
  )
}

export default WhatsappApi
