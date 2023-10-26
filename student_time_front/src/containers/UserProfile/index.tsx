import React, {useEffect, useState} from "react";

import { store } from "../../shared/model/store/store";
import { UserPage } from "../../pages/UserPage";
import { useAppDispatch } from "../../shared/lib/hooks/storeHooks";
import { logout } from "../../shared/model/store/slice/authSlice/authSlice";
import { useAppSelector } from "../../shared/lib/hooks/storeHooks";
import { selectUserIsAuth } from "../../shared/model/store/slice/authSlice/authSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiAxios from "../../shared/api/network";
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