import React, { FC, useState } from "react";
import { ReactComponent as RightArrow } from "../../img/right_arrow.svg";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import "./LoginPage.sass";
import { useAppDispatch } from "../../hooks/reduxHooks";

const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handelLogin = (email: string, pass: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/personal");
      })
      .catch(() => alert("invalid email or password"));
  };

  return (
    <>
      <div className="block-back">
        <RightArrow />
        <p className="text-back">Вернуться на главную</p>
      </div>
      <div className="login-block">
        <div className="login-block-inside">
          <h1 className="text-enter">Вход</h1>
          <div className="input-padding">
            <CustomInput
              text="Логин"
              type="email"
              placeholder="Введите логин"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="input-padding">
            <CustomInput
              text="Пароль"
              type="password"
              placeholder="Введите пароль"
              value={pass}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPass(e.target.value)
              }
            />
          </div>
          <div className="input-padding">
            <CustomButton
              text={"Вход"}
              onClick={() => handelLogin(email, pass)}
            />
          </div>
          <div className="input-padding">
            <div className="butn-registr">
              <p className="butn-registr-text">
                Авторизация с использованием ЕС ИФЮЛ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
