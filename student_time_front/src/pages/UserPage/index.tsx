import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Link, NavLink } from "react-router-dom";

import style from './userPage.module.scss';
import { Button } from '../../shared/ui/Button';
import { selectUserIsAuth, selectUserRole } from "../../shared/model/store/slice/authSlice/authSlice";
import { ModalWindowPage } from "../../widgets/modalWindowPage";
import { useAppSelector } from "../../shared/lib/hooks/storeHooks";

type UserPageType = {
  userOutput: () => void;
  userEmail: String;
  userRole: String;
  isAuth: boolean;
};

export const UserPage = observer((props: UserPageType) => {
  const { userOutput, userEmail, userRole, isAuth } = props;
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
          <p className={style.vacancy}>{userRole}</p>
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
        <Link to="/" onClick={userOutput}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.5 2.5H17.5V7.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.33334 11.6667L17.5 2.5" stroke="#2A2F37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className={style.dropDownMenuText}>Выход</p>
        </Link>
      </div>

      {/* <ModalWindowPage
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
      /> */}
    </div>
  );
});