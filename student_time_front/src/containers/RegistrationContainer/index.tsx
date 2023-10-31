import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { RegistrationPage } from "../../pages/RegistrationPage";
import { IRegistrationUser } from "../../models/IRegistrationUser";
import { clearErrorMessage, registration, selectAuthError, selectUserRole } from "../../shared/model/store/slice/authSlice/authSlice";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks/storeHooks";


export const RegistrationContainer = () => {
  const [userInput, setUserInput] = useState<IRegistrationUser>();
  const [isValid, setIsValid] = useState(false);
  const [statusAgreement, setStatusAgreement] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [role, setRole] = useState('');

  const authError = useAppSelector(selectAuthError);
  const userRole = useAppSelector(selectUserRole);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

 

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, []);


  useEffect(() => {
    if (userRole) {
      setRole(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    if (role) {
      
      navigate('/');
    }
  }, [role]);

  useEffect(() => {
    setErrorMessage(authError);
  }, [authError]);


  const handlerButton = async () => {
    if (isValid && statusAgreement) {
      await dispatch(registration({ userInput }));
    } else {
      setErrorMessage('Заполните обязательные поля!');

      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  const handlerUserInput = (input: IRegistrationUser) => {
    setUserInput(input);
  };

  const handlerIsValid = (status: boolean) => {
    setIsValid(status);
  };

  const handlerStatusAgreement = (status: boolean) => {
    setStatusAgreement(status);
  };

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