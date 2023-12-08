import React from "react";
import "./SerchInput.sass";

interface ISerchInputProps {
  children?: React.ReactNode;
  props?: any;
}

const SerchInput: React.FC<ISerchInputProps> = ({ ...props }) => {
  return (
    <div className="serch-block">
      <input
        className="input-serch"
        placeholder="Выберите ИС/СР для внесения метаданных..."
        type="text"
      ></input>{" "}
      <div className="button-serch">
        <p className="text-btn-serch">Показать</p>
      </div>
    </div>
  );
};

export default SerchInput;
