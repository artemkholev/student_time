import React from "react";

import style from "./Form.module.scss"

type FormPropsType = {
  title: string | null;
  supTitle: string | null;
  children: React.ReactNode;
};

export const Form: React.FC<FormPropsType> = ({
  title,
  supTitle,
  children,
}) => (
  <div className={style.container}>
    <div className={style.form}>
      <h1 className={style.form__title}>{title}</h1>
      <p className={style.form__supTitle}>{supTitle}</p>
      <form className={style.form__body}>{children}</form>
    </div>
  </div>
);