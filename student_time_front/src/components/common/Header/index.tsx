import React from "react";

import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import style from './Header.module.scss'


const Header = observer(() => {
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
            <Link to="/catalog" className={style.catalogUser}>
                catalog
            </Link>
            <Link to="/auth" className={style.loginUser}>
                login
            </Link>
            <Link to="/userAccount" className={style.photoUser}>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
})

export default Header;