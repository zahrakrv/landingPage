import React from 'react';
import '../../styles/components/formSection.css';
import CustomDropdown from './CustomDropdown.jsx'
import captcha from '../../assets/image/captcha.png'
import { FaUser, FaEnvelope, FaPhoneAlt, FaPen } from 'react-icons/fa';

const FormSection = () => {
    const categoryOptions = ['موقعیت شغلی', 'ایده و طرح', 'انتقادات و پیشنهادات'];
  return (
      <div className="form-container">
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">نام/نام شرکت:</label>
              <div className="input-with-icon">
                <FaUser className="icon" />
                <span className='pipe-line'>|</span>
                <input type="text" id="name" placeholder="نام" />
              </div>
            </div>
            <div className="form-group">
              <label>دسته بندی:</label>
              <CustomDropdown
                options={categoryOptions}
                placeholder="دسته بندی را انتخاب کنید..."
              />
            </div>
          </div>
  
          <div className="form-row">

          <div className="form-group">
              <label htmlFor="phone">شماره تماس:</label>
              <div className="input-with-icon">
                <FaPhoneAlt className="icon icon-left" />
                <span className='pipe-line'>|</span>
                <input type="text" id="phone" placeholder="شماره تماس" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">ایمیل:</label>
              <div className="input-with-icon">
                <FaEnvelope className="icon icon-left" />
                <span className='pipe-line'>|</span>
                <input type="email" id="email" placeholder="ایمیل" />
              </div>
            </div>

          </div>
  
          <div className="form-row">
            <div className="form-group full-width">
              <label htmlFor="request">درخواست:</label>
              <div className="input-with-icon">
                <FaPen className="icon textarea-icon" />
                <textarea id="request" placeholder="درخواست خود را بنویسید..." rows="6"></textarea>
              </div>
            </div>
          </div>
          
          <div className="form-footer">
          <button type="submit" className="submit-button">ارسال</button>
            <div className="recaptcha-container">
              <input type="checkbox" id="recaptcha-checkbox" />
              <label htmlFor="recaptcha-checkbox">من ربات نیستم</label>
              <div className="recaptcha-logo">
                <img src={captcha} alt="reCAPTCHA" />
              </div>
            </div>
          </div>
        </form>
      </div>
  )
};

export default FormSection;