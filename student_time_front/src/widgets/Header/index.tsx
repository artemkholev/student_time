import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import style from './Header.module.scss'
import { useAppSelector } from "../../shared/lib/hooks/storeHooks";
import { selectUserIsAuth } from "../../shared/stores/slice/authSlice/authSlice";


const Header = observer(() => {
  const isAuth = useAppSelector(selectUserIsAuth);
  
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.wrapperHeader}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              fill="#E9E9E9"
              points="0,100 280,0 100,100"
            />
          </svg>
          <Link to="/" className={style.logo}>STUDENT TIME</Link>
        
          <div className={style.userTabs}>
            {isAuth && <NavLink
              to="/user/catalog"
              className={({ isActive }) => `${isActive ? [style.active, style.catalogUser].join(' ') : style.catalogUser}`}
            >
              catalog
            </NavLink>}
            {!isAuth && <NavLink
              to="/auth/authenticate"
              className={({ isActive }) => `${(isActive || document.location.pathname === "/auth/register") ? [style.active, style.loginUser].join(' ') : style.loginUser}`}
            >
              login
            </NavLink>}
            {isAuth && <NavLink
              to="/user"
              className={({ isActive }) => `${(isActive) ? [style.active, style.photoUser].join(' ') : style.photoUser}`}
            >
            </NavLink>}
          </div>
        </div>
      </div>
    </header>
  );
})

export default Header;