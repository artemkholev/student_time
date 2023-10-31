import React from "react";

import mainImg from "../../app/assets/photo/info.png"
import style from "./mainPage.module.scss"

export const MainPage = () => {
  return (
    <div className={style.container}>
      <section className={style.mainSection}>
        <div className={style.photo}>
          <img className={style.mainSection_img} src={mainImg} alt="main img" />
          <div className={style.topRight}>Feel your time</div>
        </div>
        <blockquote className={style.informations}>
          <p>Никогда не поздно быть тем, кем ты мог быть.</p><br />
          <cite>Джордж Элиот</cite>
        </blockquote>
      </section>
    </div>
  );
}