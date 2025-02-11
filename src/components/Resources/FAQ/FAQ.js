
import FAQHome from './FAQHome';
import { Whatsapp, voicecall,bulkSmsData,RcsData } from "./FaqData";

const MainFaq =()=>{
    return(
        <>
       <FAQHome data={Whatsapp}/>
       <FAQHome data={RcsData}/>
       <FAQHome data={voicecall}/>
       <FAQHome data={bulkSmsData}/>
        </>
    )
}

export default MainFaq