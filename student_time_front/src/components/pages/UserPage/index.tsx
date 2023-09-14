import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import style from './userPage.module.scss';
import { Button } from '../../common/Button';
import { Form } from '../../common/Form';
import { RegAuthButton } from "../../common/Button/RegAuthButton";

export const UserPage = observer(() => {
  return (
    <div className={style.userProfile}>
      <div className={style.headerRegAuth}>
          <p className={style.userPage}>User Profile</p>
          <NavLink
            to="/"
            className={style.closeWindow}
          >
            ×
          </NavLink>
      </div>

      <div className={style.infoAboutUser}>
        <div className={style.photoUser}>

        </div>
        <div className={style.info}>
          <p className={style.email}>artemkholev@yandex.ru</p>
          <p className={style.vacancy}>Product Design</p>
          <p className={style.time}>Eastern European Time (EET), Cairo UTC +3</p>
        </div>
        <div className={style.button}>
          <Button
            clName={null}
            title="Upload New Photo"
            handler={() => {console.log("press")}}
            width="180px"
            height="55px"
            background="#000"
            textColor="#FFF"
            fontSize="18px"
            fontWeight="400"
            margin="0 0 0 0"
            borderRadius="10px"
            icon={null}
          />
          <Button
            clName={null}
            title="Delete"
            handler={() => {console.log("press")}}
            width="160px"
            height="55px"
            background="#FFF"
            textColor="#000"
            fontSize="18px"
            fontWeight="400"
            margin="0 0 0 0"
            borderRadius="10px"
            icon={null}
          />
        </div>
      </div>
    </div>
  );
});