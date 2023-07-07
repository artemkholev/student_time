import React from "react";
import { Outlet } from 'react-router-dom';

import Footer from "../Footer";
import Header from '../Header';
import style from './PageWrapper.module.scss';

export const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
        <Outlet />
    </main>
    <Footer />
  </div>
); 