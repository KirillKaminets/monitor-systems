import React from "react";
import { ReactComponent as Logo } from "../../img/logoRegistry.svg";
import NatificationAndLogin from "./NatificationAndLogin/NatificationAndLogin"
import "./Header.sass";

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="header">
        <div className="header-logo">
      <Logo />
      </div>
      <div className="header-menu">
        <p className="header-menu-text">Меню</p>
        <p className="header-menu-text-center">Вопросы и ответы</p>
        <p className="header-menu-text">Об АИС</p>
      </div>
      <div className="header-natification-block">
     <NatificationAndLogin/>
     </div>
    </div>
  );
};

export default Header;
