import React from 'react';
import '../styles/components/footer.css'; 
import logo from '../assets/image/logo-3.png'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src={logo} alt="One Holding Logo" />
            </div>

            <div className="footer-contact-info">
                <div className="contact-item">
                    <FiMail />
                    <span>info1@one-holding.ir</span>
                </div>
                <div className="contact-item">
                    <FiMapPin />
                    <span>تهران، جهان کودک، برج دات وان</span>
                </div>
                <div className="contact-item">
                    <FiPhone />
                    <span>۰۲۱-۴۲۱۰۱۰۰۰</span>
                </div>
            </div>

            <div className="footer-links-section">
                <div className="links-column">
                    <h4>دسترسی سریع</h4>
                    <ul>
                        <li><a href="/contact-us">تماس با ما</a></li>
                        <li><a href="/about-us">درباره ما</a></li>
                        <li><a href="/companies">شرکت ها</a></li>
                        <li><a href="/careers">استخدام</a></li>
                        <li><a href="/news">اخبار</a></li>
                    </ul>
                </div>
                <div className="links-column">
                    <h4>لینک ها</h4>
                    <ul>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                    </ul>
                </div>
                <div className="links-column">
                    <h4>لینک ها</h4>
                    <ul>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                    </ul>
                </div>
                <div className="links-column">
                    <h4>لینک ها</h4>
                    <ul>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                        <li><a href="#">www.link.com</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright-text">هر واژه، هر تصویر، هر پیوند، متعلق به گروه ارزش آفرینی وان است @</div>
            </div>
        </footer>
    );
};

export default Footer;