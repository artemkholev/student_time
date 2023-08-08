import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthPage } from "../../components/pages/AuthPage";
import { login, selectUserId, selectAuthError, selectUserRole, clearErrorMessage } from "../../store/slice/authSlice/authSlice"
import { useAppSelector, useAppDispatch } from "../../hooks/storeHooks";
import { getUser } from "../../store/slice/userSlice/userSlice";

export const AuthContainer = () => {  
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [role, setRole] = useState('');

  // const userId = useAppSelector(selectUserId);
  // const authError = useAppSelector(selectAuthError);
  // const userRole = useAppSelector(selectUserRole);

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerEmail = (value: string) => {
    setEnteredEmail(value);
  };
  const handlerPassword = (value: string) => {
    setEnteredPassword(value);
  };

  // useEffect(() => {
  //   dispatch(clearErrorMessage())
  // }, []);

  // useEffect(() => {
  //   if (userId) {
  //     dispatch(getUser(userId));
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userRole) {
  //     setRole(userRole);
  //   }
  // }, [userRole]);

  // useEffect(() => {
  //   if (role === 'admin') {
  //     navigate('/ads');
  //   } else if (role === 'user') {
  //     navigate('/');
  //   }
  // }, [role]);

  // useEffect(() => {
  //   setErrorMessage(authError)
  // }, [authError]);

  const handlerErrorMessageInput = (value: string) => {
    // setErrorMessage(value);
  };

  const handler = () => {
    // console.log(errorMessage);
    // if (!errorMessage && enteredEmail && enteredPassword) {
    //   dispatch(login({enteredEmail, enteredPassword}));
    // }
    console.log('hello')
  };

  return (
    <div>
      <AuthPage
        handlerEmail={handlerEmail}
        handlerPassword={handlerPassword}
        handler={handler}
        errorMessage={errorMessage}
        handlerErrorMessageInput={handlerErrorMessageInput}
      />
    </div>
  );
}