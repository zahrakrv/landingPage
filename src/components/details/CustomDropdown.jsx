import React, { useState, useRef, useEffect } from 'react';
import { FaThLarge, FaChevronUp } from 'react-icons/fa';
import '../../styles/components/customDropdown.css';

const CustomDropdown = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
        <div className={`dropdown-header ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <FaThLarge className="grid-icon" />
        <span className="dropdown-placeholder">
          {selectedOption ? selectedOption : placeholder}
        </span>
        <div className="separator"></div>
        <FaChevronUp className={`chevron-icon ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;