import React from 'react'
import x from '../../assets/image/social/x.svg'
import '../../styles/components/socialSection.css'
import tel from '../../assets/image/social/tel.svg'
import mail from '../../assets/image/social/mail.svg'
import linkedin from '../../assets/image/social/linkdin.png'
import telegram from '../../assets/image/social/telegram.svg'
import whatsapp from '../../assets/image/social/whatsapp.png'

const SocialSection=()=>{
    return(
        <section class="social-section">
            <div class="social-icons-container">
                    <a href="#" target="_blank">
                            <img src={linkedin} alt="LinkedIn" />
                    </a>
                <a href="#" target="_blank"><img src={x} alt="Twitter" /></a>
                <a href="#" target="_blank"><img src={tel} alt="tel" /></a>
                <a href="#" target="_blank"><img src={mail} alt="Email" /></a>
                <a href="#" target="_blank"><img src={telegram} alt="Telegram" /></a>
                <a href="#" target="_blank"><img src={whatsapp} alt="WhatsApp" /></a>
            </div>

        </section>

    )
}
export default SocialSection