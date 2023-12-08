import React from "react";
import SerchInput from "../SerchInput/SerchInput";
import "./ListComponent.sass";

interface IListComponentProps {
  children?: React.ReactNode;
  itemBook?: number;
}

const ListComponent: React.FC<IListComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <p className="list-component-text">Выбор ИС/СР для внесения метаданных</p>
      <div>
        <SerchInput />
      </div>

      <p className="list-component-text">Список АИС</p>
    </div>
  );
};

export default ListComponent;
