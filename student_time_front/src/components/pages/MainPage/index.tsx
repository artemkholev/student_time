import React from "react";

import mainImg from "../../../assets/photo/info.png"
import style from "./mainPage.module.scss"

export const MainPage = () => {
  return (
    <div className={style.container}>
      <section className={style.mainSection}>
        <div className={style.info}>
          <img className={style.mainSection_img} src={mainImg} alt="main img" />
          <div className={style.topRight}>Feel your time</div>
        </div>
      </section>
    </div>
  );
}