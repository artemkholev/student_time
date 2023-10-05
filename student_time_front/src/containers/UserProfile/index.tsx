import React, {useEffect, useState} from "react";

import { store } from "../../store/store";
import { UserPage } from "../../components/pages/UserPage";
import { useAppDispatch } from "../../hooks/storeHooks";
import { logout } from "../../store/slice/authSlice/authSlice";
import { useAppSelector } from "../../hooks/storeHooks";
import { selectUserEmail } from "../../store/slice/authSlice/authSlice";

export const UserProfileContainer = () => {
  const dispatch = useAppDispatch();

  const [auth, setAuth] = useState(useAppSelector(selectUserEmail));

  const handlerButton = async () => {
    if (auth) {
      await dispatch(logout());
    } 
  };


  return (
    <div>
      <UserPage
        handlerButton={handlerButton}
      />
    </div>
  );
}