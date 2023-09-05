import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthPage } from "../../components/pages/AuthPage";
import { login, selectUserId, selectAuthError, selectUserRole, clearErrorMessage } from "../../store/slice/authSlice/authSlice"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { getUser } from "../../store/slice/userSlice/userSlice";
import { IAuthUser } from "../../models/IAuthUser";

export const AuthContainer = () => {  
  const [userInput, setUserInput] = useState<IAuthUser>();
  const [errorMessage, setErrorMessage] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [role, setRole] = useState('');

  const userId = useAppSelector(selectUserId);
  const authError = useAppSelector(selectAuthError);
  const userRole = useAppSelector(selectUserRole);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearErrorMessage())
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(getUser(userId));
    }
  }, [userId]);

  useEffect(() => {
    if (userRole) {
      setRole(userRole);
    }
  }, [userRole]);

  useEffect(() => {
    if (role === 'admin') {
      navigate('/ads');
    } else if (role === 'user') {
      navigate('/');
    }
  }, [role]);

  useEffect(() => {
    setErrorMessage(authError)
  }, [authError]);

  const handlerErrorMessageInput = (value: string) => {
    setErrorMessage(value);
  };

  const handlerUserInput = (userData: IAuthUser) => {
    setUserInput(userData);
  };

  const handlerIsValid = (status: boolean) => {
    setIsValid(status);
  };

  const handler = async () => {
    if (isValid) {
      await  dispatch(login({userInput}));
    } else {
      setErrorMessage('Заполните обязательные поля!');

      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <div>
      <AuthPage
        handlerUserInput={handlerUserInput}
        handlerIsValid={handlerIsValid}
        handler={handler}
        errorMessage={errorMessage}
        handlerErrorMessageInput={handlerErrorMessageInput}
      />
    </div>
  );
}