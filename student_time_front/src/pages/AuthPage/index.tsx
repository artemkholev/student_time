import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import axios  from "axios";

import style from './AuthPage.module.scss';
import { Button } from '../../shared/ui/Button';
import { Form } from "../../widgets/Form";
import { InputForRegAuth } from "../../shared/ui/Input/InputForRegAuth"
import { RegAuthButton } from "../../shared/ui/Button/RegAuthButton";
import { IAuthUser } from "../../shared/models/IAuthUser";
 
type AuthPageType = {
  handlerUserInput: (data: IAuthUser) => Promise<void> | void | null;
  handlerIsValid: (status: boolean) => void;
  handler: () => void | null | Promise<void>;
  errorMessage: string;
  handlerErrorMessageInput: (value: string) => void;
};

export const AuthPage = observer((props: AuthPageType) => {
  const {handlerUserInput, handlerIsValid, handler, errorMessage, handlerErrorMessageInput } = props;
  
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');


  useEffect(() => {
    if (userPassword.length > 0 && userEmail.length > 0) {
      handlerIsValid(true);
    } else {
      handlerIsValid(false);
    }
  }, [userPassword, userEmail]);

  useEffect(() => {
    handlerUserInput({ email: userEmail, password: userPassword });
  }, [userEmail, userPassword]);

  const handlerEmail = (email: string) => {
    setUserEmail(email);
  };

  const handlerPassword = (password: string) => {
    setUserPassword(password);
  };

  return (
    <div className={style.authorization}>
      <Form title="" supTitle="">
        <div className={style.headerRegAuth}>
          <RegAuthButton />
           <NavLink
              to="/"
              className={style.closeWindow}
            >
              ×
            </NavLink>
        </div>

        <div className={style.listInputs}>
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
          {errorMessage && <p className={style.error}>{errorMessage}</p>}
        </div>

        <div className={style.noPassword}>Забыли пароль?</div>

        <Button
          clName={null}
          title="Войти"
          handler={handler}
          width="291px"
          height="67px"
          background="#000"
          textColor="#FFF"
          fontSize="24px"
          fontWeight="400"
          margin="49px 0 46px 150px"
          borderRadius="10px"
          icon={null}
        />
      </Form>
    </div>
  );
});