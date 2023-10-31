import React, { useState, useEffect } from "react";

import style from "./Checkbox.module.scss"
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
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    trackAgreement(checkedValue);
  }, [checkedValue]);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  useEffect(() => {
    if (selectedFilters?.category.find((el) => el === text)) {
      setCheckedValue(true);
    }
    if (selectedFilters?.published.find((el) => el === text)) {
      setCheckedValue(true);
    }
  }, [selectedFilters]);

  useEffect(() => {
    handlerErrorMessage(errorMessage);
  }, [checkedValue]);

  useEffect(() => {
    if (checkedValue) {
      setErrorMessage('Примите условия!');
    } else {
      setErrorMessage('');
    }
  }, [checkedValue]);


  const handler = () => {
    setCheckedValue(!checkedValue);

    if (checkedValue) {
      deleteValue(text);
    }
  };

  useEffect(() => {
    if (checkedValue) {
      if (text === 'Да') {
        handlerCheckedFlag(true);
      }
      if (text === 'Нет') {
        handlerCheckedFlag(false);
      }
    }
  }, [checkedValue]);

  useEffect(() => {
    handlerFilterValue(id, checkedValue);
  }, [checkedValue]);


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