import React from "react";

import Header from '../Header';
// import Footer from '../Footer';
import style from './PageWrapper.module.scss';

export const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
     <h1>Main</h1>
  </div>
); 