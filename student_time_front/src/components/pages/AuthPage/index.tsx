import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "react-router-dom";

import style from './AuthPage.module.scss';
import { Button } from '../../common/Button';

export const AuthPage = observer(() => {
  return (
    <div className={style.authorization}>
       {/* <Form title="Войдите в аккаунт" supTitle="">
        <div>
          hello  
        </div>
      </Form> */}
      hello
    </div>
  );
});