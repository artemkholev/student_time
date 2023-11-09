import { linksList } from "../config";
import styles from "./styles.module.scss"
import { NavLink } from "react-router-dom";

export const CatalogCards = () => {
  return (
    <div className={styles.container}> 
        {linksList.map(({ id, title, path, SVG }) => (
          <NavLink to={path} key={id} className={styles.card}>
            <p>{title}</p>
            <div className={styles.svg}>{<SVG/>}</div>
          </NavLink>
        ))}
    </div>
  )
};