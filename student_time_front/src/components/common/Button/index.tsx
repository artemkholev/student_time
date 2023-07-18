import React, { ReactElement } from "react";

import style from "./Buttom.module.scss";

type ButtonPropsType = {
  clName: string | null;
  title: string | null;
  handler: (data?: any) => Promise<void> | void | null;
  width: string | null;
  height: string | null;
  background: string | null;
  textColor: string | null;
  fontSize: string | null;
  fontWeight: string | null;
  margin: string | null;
  borderRadius: string | null;
  icon: ReactElement | null;
};

export const Button = (props: ButtonPropsType) => {
  const {
    clName,
    title,
    handler,
    width,
    height,
    background,
    textColor,
    fontSize,
    fontWeight,
    margin,
    borderRadius,
    icon,
  } = props;

  return (
    <button
      className={[style.wrapper, clName].join(' ')}
      type="button"
      style={{
        width: `${width}`,
        height: `${height}`,
        background: `${background}`,
        color: `${textColor}`,
        fontSize: `${fontSize}`,
        fontWeight: `${fontWeight}`,
        margin: `${margin}`,
        borderRadius: `${borderRadius}`,
      }}
      onClick={ handler }
    >
      { title }
      {icon}
    </button>
  );
};