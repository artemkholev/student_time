import React, {useEffect, useState} from "react";

import { UserPage } from "../../pages/UserPage";
import { useAppDispatch } from "../../shared/lib/hooks/storeHooks";
import { logout } from "../../shared/model/store/slice/authSlice/authSlice";
import { useAppSelector } from "../../shared/lib/hooks/storeHooks";
import { selectUserIsAuth } from "../../shared/model/store/slice/authSlice/authSlice";
import UserService from "../../shared/api/network/tasks/UserService";

export const UserProfileContainer = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const isAuth = useAppSelector(selectUserIsAuth);
  const dispatch = useAppDispatch();

  const userOutput = () => {
    if (isAuth) {
      dispatch(logout());
    }
  };

  const getUserInfo = async () => {
    const response = await UserService.getUser();
    setUserEmail(response.data.userEmail);
    setUserRole(response.data.userRole)
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserInfo();
    }
  }, []);

  return (
    <div>
      <UserPage
        userOutput={userOutput}
        userEmail={userEmail}
        userRole={userRole}
        isAuth={isAuth}
      />
    </div>
  );
}