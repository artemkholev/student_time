import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import axios  from "axios";

import style from './AuthPage.module.scss';
import { Button } from '../../common/Button';
import { Form } from '../../common/Form';
import { InputForRegAuth } from "../../common/Form/Input/InputForRegAuth"
import { RegAuthButton } from "../../common/Button/RegAuthButton";
 
type AuthPageType = {
  handlerEmail: (value: string) => void | null;
  handlerPassword: (value: string) => void | null;
  handler: () => void | null | Promise<void>;
  errorMessage: string;
  handlerErrorMessageInput: (value: string) => void;
};

export const AuthPage = observer((props: AuthPageType) => {
  const { handlerEmail, handlerPassword, handler, errorMessage, handlerErrorMessageInput } = props;
  
  const [erMess, setErMas] = useState<string>('');

  useEffect(() => {
    setErMas(errorMessage);
  }, [errorMessage]);

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
          {erMess && <span className={style.erMess}>{erMess}</span>}
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