import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import style from './RegistrationPage.module.scss';
import { Button } from "../../shared/ui/Button";
import { Form } from "../common/Form";
import { InputForRegAuth } from "../../shared/ui/Input/InputForRegAuth";
import { RegAuthButton } from "../../shared/ui/Button/RegAuthButton";
import { Checkbox } from "../../shared/ui/Input/Checkbox";
import { IRegistrationUser } from "../../models/IRegistrationUser";
 
type RegistrationPageType = {
  handlerUserInput: (data: IRegistrationUser) => void;
  handlerIsValid: (status: boolean) => void;
  handlerStatusAgreement: (status: boolean) => void;
  handlerButton: () => void;
  error: string | undefined;
};

export const RegistrationPage = observer((
  props: RegistrationPageType
) => {
  const {
    handlerUserInput,
    handlerIsValid,
    handlerStatusAgreement,
    handlerButton,
    error,
   } = props;

  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [userRepeatPassword, setUserRepeatPassword] = useState<string>('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (
      userPassword !== userRepeatPassword
      && userPassword.length > 0
      && userRepeatPassword.length > 0
    ) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  }, [userPassword, userRepeatPassword]);

  useEffect(() => {
    handlerUserInput({
      email: userEmail,
      password: userPassword,
    });
  }, [userEmail, userPassword]);

  useEffect(() => {
    if (userPassword === userRepeatPassword && userPassword.length > 0) {
      handlerIsValid(true);
    } else {
      handlerIsValid(false);
    }
  }, [userPassword, userRepeatPassword]);

  const handlerEmail = (email: string) => {
    setUserEmail(email);
  }
  const handlerPassword = (password: string) => {
    setUserPassword(password);
  };
  const handlerRepeatPassword = (repeatPassword: string) => {
    setUserRepeatPassword(repeatPassword);
  }
  const handlerErrorMessage = (errorMessage: string) => {
    setErrorMessage(errorMessage);
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
          {/* <InputForRegAuth
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
          /> */}
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
           {(error && <p className={style.error}>{error}</p>)
            || (!passwordMatch && (
              <p className={style.error}>Пароли не совпадают!</p>
            ))
            || (errorMessage && <p className={style.error}>{errorMessage}</p>)}
        </div>

         <Checkbox
          id={1}
          text="Создавая учетную запись, вы соглашаетесь"
          textLink="Условия использования и уведомление о конфиденциальности"
          checked
          handlerErrorMessage={handlerErrorMessage}
          trackAgreement={handlerStatusAgreement}
          handlerFilterValue={() => null}
          handlerCheckedFlag={() => null}
          deleteValue={() => null}
          selectedFilters={null}
        />

        <Button
          clName={null}
          title="Зарегистрироваться"
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