import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import style from './AuthPage.module.scss';
import { Button } from '../../common/Button';
import { Form } from '../../common/Form';
import { InputForRegAuth } from "../../common/Form/Input/InputForRegAuth"
import { RegAuthButton } from "../../common/Button/RegAuthButton";
 
type AuthPageType = {
  // handlerUserInput: (data: IAuthUser) => Promise<void> | void | null;
  // handlerIsValid: (status: boolean) => void;
  handlerButton: () => void;
  // error: string | undefined;
};

export const AuthPage = observer(() => {
  function handlerButton(data?: any): void | Promise<void> | null {
    throw new Error("Function not implemented.");
  }

  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handlerEmail = (email: string) => {
    setUserEmail(email);
  };

  const handlerPassword = (password: string) => {
    setUserPassword(password);
  };

  //axios - отсылать запросы, redux - хранилище, reduxtoolkit - допы
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
          {/* {error && <p className={style.error}>{error}</p>} */}
        </div>

        <div className={style.noPassword}>Забыли пароль?</div>

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
          margin="49px 0 46px 150px"
          borderRadius="10px"
          icon={null}
        />
      </Form>
    </div>
  );
});