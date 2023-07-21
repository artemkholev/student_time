import React from "react"

import { Route, Routes } from 'react-router-dom';

import { PageWrapper } from "./components/common/PageWrapper"
import { AuthContainer } from "./containers/AuthContainer";
import { MainContainer } from "./containers/MainContainer";
import { RegistrationContainer } from "./containers/RegistrationContainer";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
        <Route path="auth" element={<AuthContainer />} />
        <Route path="reg" element={<RegistrationContainer />} />
      </Route>
    </Routes>
  );
}

export default App;