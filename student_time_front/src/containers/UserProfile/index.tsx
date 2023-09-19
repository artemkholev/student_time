import React from "react";
import { UserPage } from "../../components/pages/UserPage";


export const UserProfileContainer = () => {
  const handlerButton = () => {
    console.log("exit");
  };


  return (
    <div>
      <UserPage
        handlerButton={handlerButton}
      />
    </div>
  );
}