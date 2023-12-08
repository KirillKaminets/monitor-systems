import React from "react";
import { redirect } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ReactComponent as RightArrow } from "../../img/right_arrow.svg";
import ListComponent from "../../components/ListComponent/ListComponent";
import "./PersonalAccountPage.sass";

export interface IPersonalAccountPageProps {}

const PersonalAccountPage: React.FunctionComponent<
  IPersonalAccountPageProps
> = (props) => {
  //const {isAuth, email} = useAuth();

  return (
    <div>
      <div className="block-back">
        <RightArrow />
        <p className="text-back">Главная</p>
        <RightArrow />
        <p className="text-back">Личный Кабинет</p>
      </div>

      <div className="profile-item">
        <h2 className="profile-h-text">Личный кабинет</h2>
      </div>
      <div className="profile-item">
        <p className="item-account-activ">Реестры</p>
        <p className="item-account">Электронные сервисы</p>
        <p className="item-account">Потребление данных</p>
        <p className="item-account">Справочники</p>
        <p className="item-account">Отчёты</p>
      </div>

      <div className="list-padding-block">
        <ListComponent />
      </div>
    </div>
  );
};

export default PersonalAccountPage;
