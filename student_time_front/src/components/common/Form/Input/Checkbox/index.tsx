import React, { useState } from "react";

import style from ".//Checkbox.module.scss"
import { Link } from "react-router-dom";

type CheckboxType = {
  id: number;
  text: string;
  textLink: string | null;
  checked: boolean;
  handlerErrorMessage: (_value: string) => void | null;
  trackAgreement: (_value: boolean) => void | null;
  handlerFilterValue: (_id: number, _value: boolean) => void | null;
  handlerCheckedFlag: (_value: boolean) => void | null;
  deleteValue: (_value: string) => void | null;
  selectedFilters: { category: string[]; published: string[] } | null;
};

export const Checkbox = (props: CheckboxType) => {
  const {
    id,
    text,
    textLink,
    checked,
    handlerErrorMessage,
    trackAgreement,
    handlerFilterValue,
    handlerCheckedFlag,
    deleteValue,
    selectedFilters,
  } = props;

  const [checkedValue, setCheckedValue] = useState(false);

  const handler = () => {
    setCheckedValue(!checkedValue);

    if (checkedValue) {
      deleteValue(text);
    }
  };

  return (
    <div className={style.container}>
      <label htmlFor={text} className={style.section__checkbox}>
        <input
          type="checkbox"
          checked={checkedValue}
          onClick={handler}
          readOnly
          id={text}
        />
        <span className={style.checkmark} />
      </label>
      <div className={style.text__wrapper}>
        <p>{text}</p>
        <Link to="/agreement" className={style.link_agreement}>
          {textLink}
        </Link>
      </div>
    </div>
  );
};