import React from "react";
import "./CustomInput.sass";

interface ICustomInputProps {
  children?: React.ReactNode;
  props?: any;
  text?: string;
  type?: string;
  id?: string;
  name?: string;
  onChange?: any;
  placeholder?: string;
  value?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  onChange,
  children,
  ...props
}) => {
  return (
    <div className="custom-input-block">
      <p className="custom-input-text">{props.text}</p>
      <input
        className="custom-input"
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
