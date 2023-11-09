import React from "react";
import style from "./styles.module.scss"
import {CatalogCards} from "../../features/catalogCards/"

export const CatalogPage = () => {
  return (
    <div className={style.container}>
      <h1>Catalog</h1>
      <CatalogCards/>
      <div className={style.line1}></div>
      <div className={style.line2}></div>
    </div>
  );
}