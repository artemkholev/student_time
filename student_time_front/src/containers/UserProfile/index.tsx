import React, {useEffect, useState} from "react";

import { store } from "../../store/store";
import { UserPage } from "../../components/pages/UserPage";
import { useAppDispatch } from "../../hooks/storeHooks";
import { logout } from "../../store/slice/authSlice/authSlice";
import { useAppSelector } from "../../hooks/storeHooks";
import { selectUserIsAuth } from "../../store/slice/authSlice/authSlice";

export const UserProfileContainer = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("");

  const dispatch = useAppDispatch();

  const [auth, setAuth] = useState(useAppSelector(selectUserIsAuth));

  const handlerButton = async () => {
    if (auth) {
      await dispatch(logout());
    } 
  };


  return (
    <div>
      <UserPage
        handlerButton={handlerButton}
        userEmail={userEmail}
        userRole={userRole}
      />
    </div>
  );
}