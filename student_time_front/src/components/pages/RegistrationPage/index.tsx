import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import style from './RegistrationPage.module.scss';
import { Button } from '../../common/Button';
import { Form } from '../../common/Form';
import { InputForRegAuth } from "../../common/Form/Input/InputForRegAuth"
import { RegAuthButton } from "../../common/Button/RegAuthButton";
import { Checkbox } from "../../common/Form/Input/Checkbox";
 
type AuthPageType = {
  // handlerUserInput: (data: IAuthUser) => Promise<void> | void | null;
  // handlerIsValid: (status: boolean) => void;
  handlerButton: () => void;
  // error: string | undefined;
};

export const RegistrationPage = observer(() => {
  function handlerButton(data?: any): void | Promise<void> | null {
    throw new Error("Function not implemented.");
  }

  const [userName, setUserName] = useState<string>('');
  const [userLastName, setUserSurname] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userRepeatPassword, setUserRepeatPassword] = useState<string>('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlerName = (name: string) => {
    setUserName(name);
  };
  const handlerSurname = (surname: string) => {
    setUserSurname(surname);
  }
  const handlerEmail = (email: string) => {
    setUserEmail(email);
  }
  const handlerPassword = (password: string) => {
    setUserPassword(password);
  };
  const handlerRepeatPassword = (repeatPassword: string) => {
    setUserRepeatPassword(repeatPassword);
  }

  return (
    <div className={style.registration}>
      <Form title="" supTitle="">
        <div className={style.headerRegAuth}>
          <RegAuthButton/>
           <NavLink
              to="/"
              className={style.closeWindow}
            >×</NavLink>
        </div>

        <div className={style.listInputs}>
          <InputForRegAuth
            placeholder="Name"
            type="text"
            autocomplete="on"
            handlerInput={handlerName}
          />
          <InputForRegAuth
            placeholder="Surname"
            type="text"
            autocomplete="on"
            handlerInput={handlerSurname}
          />
          <InputForRegAuth
            placeholder="Email"
            type="text"
            autocomplete="on"
            handlerInput={handlerEmail}
          />
          <InputForRegAuth
            placeholder="Password"
            type="password"
            autocomplete="on"
            handlerInput={handlerPassword}
          />
          <InputForRegAuth
            placeholder="Repeat password"
            type="password"
            autocomplete="on"
            handlerInput={handlerRepeatPassword}
          />
          {/* {error && <p className={style.error}>{error}</p>} */}
        </div>

        <div className={style.agreement}>
          <p>Создавая учетную запись, вы соглашаетесь<br />
            <u>
              <NavLink to="/">Условия использования и уведомление о конфиденциальности</NavLink>
            </u>
          </p>
        </div>

        <Button
          clName={null}
          title="Войти"
          handler={handlerButton}
          width="291px"
          height="67px"
          background="#000"
          textColor="#FFF"
          fontSize="24px"
          fontWeight="400"
          margin="49px 0 27px 150px"
          borderRadius="10px"
          icon={null}
        />
      </Form>
    </div>
  );
});