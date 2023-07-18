import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client"

import { AuthPage } from "../../components/pages/AuthPage";
import { IAuthUser } from "../../models/IAuthUser";
import { GET_USER } from '../../querys/user-querys';
import { AUTH_USER } from "../../querys/auth-querys";


export const AuthContainer = () => {
  // const [userInput, setUserInput] = useState<IAuthUser>();
  // const [isValid, setIsValid] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  // const [authUser, { data, error }] = useMutation(AUTH_USER, {
  //   variables: { loginUser: userInput},
  // })
  // const user = useQuery(GET_USER);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   setErrorMessage(error?.message)
  // }, [error]);

  // useEffect( () => {
  //   if (data?.loginUser.accessToken) {
  //     user.refetch();

  //     localStorage.setItem('token', data?.loginUser.accessToken);

  //     // authStore.handlerUserAuthorized(true);

  //     if (user.data?.getUser.role === 'admin') {
  //       navigate('/admin_orders');
  //     } else {
  //       navigate('/');
  //     }
  //   }
  // }, [data])

  // const handlerUserInput = (userData: IAuthUser) => {
  //   setUserInput(userData);
  // };

  // const handlerIsValid = (status: boolean) => {
  //   setIsValid(status);
  // };

  // const handlerButton = async () => {
  //   if (isValid) {
  //     await authUser();
  //   } else {
  //     setErrorMessage('Заполните обязательные поля!');

  //     setTimeout(() => setErrorMessage(''), 3000);
  //   }
  // };

  return (
    <div>
      <AuthPage/>
    </div>
  );
}