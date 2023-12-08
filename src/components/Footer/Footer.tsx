import React from "react";
import { ReactComponent as Logo } from "../../img/logoRegistry.svg";
import LogoBank from "../../img/logoBank.png";
import "./Footer.sass";

export interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <>
      <div className="footer-block">
        <div className="footer-one">
          <ul className="footer-ul">
            <Logo />
            <li className="footer-li-text-one">
              Автоматизированная информационная система «Реестры»
            </li>
            <li className="footer-li-text-one">
              © АИС «Реестры», 2022. Все права защищены.
            </li>
          </ul>
        </div>
        <div className="footer-two">
          <ul className="footer-ul">
            <h4 className="footer-h-text">Техническая поддержка</h4>
            <li className="footer-li">+375 25 111 22 33 </li>
            <li className="footer-li">+375 29 222 44 55</li>
            <li className="footer-li">dev@agsr.by</li>
            <li className="footer-li-link">Связаться с поддержкой</li>
          </ul>
        </div>
        <div className="footer-three">
          <ul className="footer-ul">
            <h4 className="footer-h-text">Контакты</h4>
            <li className="footer-li">+375 33 112 22 45 </li>
            <li className="footer-li">+375 29 222 44 88</li>
            <li className="footer-li">dev@agsr.by</li>
            <li className="footer-li">г. Минск, ул. К.Цеткин, д. 24-705</li>
          </ul>
        </div>
      </div>
      <div className="footer-partners-block">
        <img className="footer-partners-img" src={LogoBank} alt="icon bank" />
        <div className="footer-partners-button">
          <p className="footer-partners-button-text">Условный партнёр</p>
        </div>
        <div className="footer-partners-button">
          <p className="footer-partners-button-text">Условный партнёр</p>
        </div>
        <div className="footer-partners-button">
          <p className="footer-partners-button-text">Условный партнёр</p>
        </div>
        <div className="footer-partners-button">
          <p className="footer-partners-button-text">Условный партнёр</p>
        </div>
        <div className="footer-partners-button">
          <p className="footer-partners-button-text">Условный партнёр</p>
        </div>
      </div>
      <p className="footer-develop-text">
        © АИС «Реестры» Разработчк: ОАО «Агентство сервисизации и реинжиниринга»
        (г. Минск, ул. К. Цеткин, д. 24–705 dev@agsr.by)
      </p>
    </>
  );
};

export default Footer;
