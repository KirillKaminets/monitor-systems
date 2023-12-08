import React from "react";
import "./CustomButton.sass";

interface ICustomButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  text: string;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <div className="custom-button" {...props} onClick={onClick}>
      <p className="custom-button-text">{props.text}</p>
      {children}
    </div>
  );
};

export default CustomButton;
