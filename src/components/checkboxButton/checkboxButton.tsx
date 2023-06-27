import React from 'react';
import './CheckboxButton.css';

interface ContainerProps {
  id: string;
  title: string;
  inputName: string;
  value: string;
  img?: string;
  imgAlt?: string;
  size?: string

}

const CheckboxButton: React.FC<ContainerProps> = ({ id, title, inputName, value, img, imgAlt, size }) => {
  
  const checkboxButtonImg = size === "xs" ? null : img && <img src={img} alt={imgAlt} />
  const sizeStyle = size === "xs" ? "checkbox-button-xs" : "checkbox-button-default";

  return (
    <div className={`checkbox-button ${sizeStyle}`}>
      <input type="checkbox" id={id} name={inputName} value={value}/>
      <label htmlFor={id}>{checkboxButtonImg}{title}</label>
    </div>
  );
};

export default CheckboxButton;
