import React, {useEffect} from "react"

import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from './hooks/storeHooks';
import { checkAuth } from './store/slice/authSlice/authSlice';

import { PageWrapper } from "./components/common/PageWrapper"
import { AuthContainer } from "./containers/AuthContainer";
import { MainContainer } from "./containers/MainContainer";
import { RegistrationContainer } from "./containers/RegistrationContainer";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="auth/authenticate" element={<AuthContainer />} />
        <Route path="auth/register" element={<RegistrationContainer />} />
      </Route>
    </Routes>
  );
}

export default App;