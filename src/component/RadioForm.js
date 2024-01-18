import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/RadioForm.css';

const RadioForm = () => {
    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };

  return (
    <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation("/product-type/mobile")}>
            vegetables
          </span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation("/product-type/mobile")}>
            Netflix
          </span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name" onClick={() => handleNavigation("/product-type/mobile")}>
            To-Do
          </span>
        </label>
        
      </div>
  );
};

export default RadioForm;
