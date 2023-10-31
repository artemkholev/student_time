import React from "react";
import { NavLink } from "react-router-dom";

import style from "./RegAuthButton.module.scss"

export const RegAuthButton = () => {
  return (
      <div className={style.containerRegAuth}>
        <NavLink
          to="/auth/authenticate"
          className={({ isActive }) => `${isActive ? [style.active, style.auth].join(' ') : style.auth}`}
        >auth</NavLink>
        <NavLink
          to="/auth/register"
          className={({isActive}) => `${isActive ? [style.active, style.registr].join(' ') : style.registr}`}
        >registr</NavLink>
      </div>
  );
};