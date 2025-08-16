import React, { useState } from 'react';
import '../styles/components/header.css';
import Logo from '../assets/image/logo.png';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        {/* LOGO */}
        <div className="logo">
          <img src={Logo} alt="Company Logo" />
        </div>

        {/* LINKS */}
        <ul className="navList">
          <li><a href="/about-us">درباره ما</a></li>
          <li><a href="/blog">وبلاگ</a></li>
          <li><a href="/companies">معرفی شرکت ها</a></li>
          <li><a href="/contact">تماس با ما</a></li>
          <li><a href="/jobs">موقعیت های شغلی</a></li>
        </ul>

        {/* LANG */}
        <div
          className="userMenu"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="dropdownToggle">
            <div className="lang">
              <span style={{ color: '#000', fontSize: '16px' }}>فا</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                <path d="M14.5999 1.4585L9.16657 6.89183C8.5249 7.5335 7.4749 7.5335 6.83324 6.89183L1.3999 1.4585" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className={`dropdownMenu ${isDropdownOpen ? 'active' : ''}`}>
            <a href="/en" className="lang-item">
              <span>En</span>
              <span>English</span>
            </a>
            <a href="/fa" className="lang-item">
              <span>فا</span>
              <span>فارسی</span>
            </a>
            <a href="/ru" className="lang-item">
              <span>Ru</span>
              <span>Russian</span>
            </a>
            <a href="/tr" className="lang-item">
              <span>Tr</span>
              <span>Turkish</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;