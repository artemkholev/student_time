import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client"

import { RegistrationPage } from "../../components/pages/RegistrationPage";
import { IAuthUser } from "../../models/IAuthUser";
import { GET_USER } from '../../querys/user-querys';
import { AUTH_USER } from "../../querys/auth-querys";


export const RegistrationContainer = () => {

  return (
    <div>
      <RegistrationPage/>
    </div>
  );
}