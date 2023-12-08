import React, { useState } from "react";
import { ReactComponent as RightArrow } from "../../img/right_arrow.svg";
import { ReactComponent as Photo } from "../../img/photo.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import "./RegistrationPage.sass";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

export interface IRegistrationPageProps {}

const RegistrationPage: React.FunctionComponent<IRegistrationPageProps> = (
  props
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handelRegistration = (email: string, pass: string) => {
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="block-back">
        <RightArrow />
        <p className="text-back">Главная</p>
        <RightArrow />
        <p className="text-back">Профиль</p>
      </div>

      <div className="profile-item">
        <h2 className="profile-h-text">Профиль</h2>
      </div>

      <div className="profile-block">
        <div className="full-name-block">
          <Photo />
          <p className="full-name-text">Имя Фамилия</p>

          <div className="lable-activ">
            <p className="lable-activ-text">Активны</p>
          </div>
          <div className="lable-user">
            <p className="lable-user-text">Пользователь</p>
          </div>
        </div>

        <div className="block-registr-item">
          <p className="registr-item">Личные данные</p>
          <div className="registr-flex">
            <CustomInput text="Имя*" placeholder="Введите имя" />
            <div className="registr-flex-margin">
              <CustomInput text="Фамилия*" placeholder="Введите фамилию" />
            </div>
          </div>
          <div className="registr-flex">
            <CustomInput text="Отчество*" placeholder="Введите отчество" />
            <div className="registr-flex-margin">
              <CustomInput
                text="Идентификационный номер*"
                placeholder="Введите Идентификационный номер"
              />
            </div>
          </div>
          <div className="registr-flex">
            <CustomInput text="Логин*" placeholder="Введите логин" />
          </div>
        </div>

        <div className="block-registr-item">
          <p className="registr-item">Контакты</p>
          <div className="registr-flex">
            <CustomInput
              text="Адресс электроной почты"
              type="email"
              placeholder="agsr@mail.ru"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <div className="registr-flex-margin">
              <CustomInput
                text="Мобильный номер"
                type="text"
                placeholder="+375 29 123 44 55"
              />
            </div>
          </div>
        </div>

        <div className="block-registr-item">
          <p className="registr-item">Пароль</p>
          <div className="registr-flex">
            <CustomInput
              text="Текущий пароль"
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPass(e.target.value)
              }
            />
            <div className="registr-flex-margin">
              <CustomInput
                text="Новый пароль"
                type="password"
                placeholder="Введите пароль"
              />
            </div>
          </div>
          <div className="registr-flex"></div>
          <CustomInput
            text="Подтвердите пароль"
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="btn-save">
          <CustomButton
            text="Сохранить"
            onClick={() => handelRegistration(email, pass)}
          />
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
