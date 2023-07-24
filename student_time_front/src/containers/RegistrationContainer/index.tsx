import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client"

import { RegistrationPage } from "../../components/pages/RegistrationPage";
import { IAuthUser } from "../../models/IAuthUser";
import { GET_USER } from '../../querys/user-querys';
import { AUTH_USER, REG_USER } from "../../querys/auth-querys";
import { IRegistrationUser } from "../../models/IRegistrationUser";


export const RegistrationContainer = () => {
  const [userInput, setUserInput] = useState<IRegistrationUser>();
  const [isValid, setIsValid] = useState(false);
  const [statusAgreement, setStatusAgreement] = useState(true);
  // const [registrationUser, { data, error }] = useMutation(REG_USER, {
  //   variables: { registrationUser: userInput },
  // });
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const handlerUserInput = (input: IRegistrationUser) => {
    setUserInput(input);
  }
  const handlerIsValid = (status: boolean) => {
    setIsValid(status);
  }
  const handlerButton = async () => {
    if (isValid && statusAgreement) {
      // await registrationUser();
    } else {
      setErrorMessage('Fill in the required fields!');

      setTimeout(() => setErrorMessage(''), 3000);
    }
  }
  const handlerStatusAgreement = (status: boolean) => {
    setStatusAgreement(status);
  }

  return (
    <div>
      <RegistrationPage
        handlerUserInput={handlerUserInput}
        handlerIsValid={handlerIsValid}
        handlerButton={handlerButton}
        handlerStatusAgreement={handlerStatusAgreement}
        error={errorMessage}
      />
    </div>
  );
}