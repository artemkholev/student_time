import React, {useEffect, useState} from "react";

import { store } from "../../store/store";
import { UserPage } from "../../components/pages/UserPage";
import { useAppDispatch } from "../../hooks/storeHooks";
import { logout } from "../../store/slice/authSlice/authSlice";
import { useAppSelector } from "../../hooks/storeHooks";
import { selectUserIsAuth } from "../../store/slice/authSlice/authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAxios from "../../network";
import { AxiosError } from "axios";

export const UserProfileContainer = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const dispatch = useAppDispatch();

  const [isAuth, setIsAuth] = useState(useAppSelector(selectUserIsAuth));

  const handlerButton = async () => {
    if (isAuth) {
      await dispatch(logout());
    } 
  };

  interface ValidationErrors {
    errorMessage: string
    field_errors: Record<string, string>
  }

  const login = createAsyncThunk(
  '/user/info',
  // eslint-disable-next-line consistent-return
  async () => {
    try {
      const response = await apiAxios.post('http://localhost:8080/user/info');
      console.log(response.data);
      setUserEmail(response.data.email);
      setUserRole(response.data.role);
    } catch (err:any) {
      const error: AxiosError<ValidationErrors> = err;
      if (!error.response) {
        throw err;
      }
    }
  }
  );
  
  useEffect(() => {
    login();
  }, []);


  return (
    <div>
      <UserPage
        handlerButton={handlerButton}
        userEmail={userEmail}
        userRole={userRole}
        isAuth={isAuth}
      />
    </div>
  );
}