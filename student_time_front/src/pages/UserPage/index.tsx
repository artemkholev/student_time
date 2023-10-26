import { useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";

import style from './userPage.module.scss';
import { Button } from '../../shared/ui/Button';
import { selectUserIsAuth, selectUserRole } from "../../shared/model/store/slice/authSlice/authSlice";
import { ModalWindowPage } from "../common/modalWindowPage";
import { useAppSelector } from "../../shared/lib/hooks/storeHooks";

type UserPageType = {
  handlerButton: () => void;
  userEmail: String;
  userRole: String;
  isAuth: boolean;
};

export const UserPage = observer((props: UserPageType) => {
  const { handlerButton, userEmail, userRole, isAuth } = props;
  const [modal, setModal] = useState(!isAuth);
  const closeModal = () => {
    setModal(false);
    window.location.replace(`http://localhost:5173/auth/authenticate`)
  };
  
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
          <p className={style.email}>{userEmail}</p>
          <p className={style.vacancy}>{useAppSelector(selectUserRole)}</p>
          <p className={style.time}>Eastern European Time (EET), Cairo UTC +3</p>
        </div>
        <div className={style.button}>
          <Button
            clName={"newPhoto"}
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
            clName={"delete"}
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
      
      <div className={style.exitButton}>
        <Button
            clName={"exit"}
            title="exit"
            handler={handlerButton}
            width="160px"
            height="55px"
            background="#000"
            textColor="#FFF"
            fontSize="18px"
            fontWeight="400"
            margin="0 0 0 0"
            borderRadius="10px"
            icon={null}
          />
      </div>

      <ModalWindowPage
        visible={modal}
        title='Auth problem'
        content={<p>User prblem. You need login!</p>}
        footer={<Button
          clName={null}
          title="close"
          handler={closeModal}
          width="291px"
          height="67px"
          background="#000"
          textColor="#FFF"
          fontSize="24px"
          fontWeight="400"
          margin="50px 0 30px 150px"
          borderRadius="10px"
          icon={null}
        />}
        onClose={closeModal}
        time={true}
      />
    </div>
  );
});