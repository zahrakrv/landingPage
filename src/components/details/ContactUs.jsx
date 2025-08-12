import FormSection from "./FormSection"
import '../../styles/components/contactUs.css'
import address from '../../assets/image/address.png'
import Divider from "./Divider"
const ContactUs=()=>{
    return(
        <>
        <div className="divider-wrapper">
            <Divider title={'تماس با ما'} itemTitle={'با ما در تماس باشید.'}/>

        </div>
            <p>گفت‌وگو، آغاز هر پیوند است.
            اگر پرسشی دارید، مایلید بیشتر درباره ما بدانید یا ایده‌ای در ذهن دارید، خوشحال می‌شویم از شما بشنویم.</p>
            <div className="contact-us">
                <FormSection/>
                <div>
                <img src={address} alt="one company" />
                </div>
            </div>
        </>
    )
}
export default ContactUs