import React from "react";
import { ReactComponent as Natification } from "../../../img/notification.svg";
import { ReactComponent as Photo } from "../../../img/photo.svg";
import { ReactComponent as UpperArrow } from "../../../img/upper_arrow.svg";
import "./NatificationAndLogin.sass";

export interface INatificationAndLoginProps {}

const NatificationAndLogin: React.FunctionComponent<
  INatificationAndLoginProps
> = (props) => {
  return (
    <div className="header-natification">
      <Natification />
      <div className="gray-line"></div>
      <Photo />
      <p className="header-menu-text-enter">Вход в аккаунт</p>
      <UpperArrow />
    </div>
  );
};

export default NatificationAndLogin;
