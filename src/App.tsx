import React from "react"

import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from "./components/common/PageWrapper"
import { MainContainer } from "./containers/MainContainer";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<MainContainer />} />
      </Route>
    </Routes>
  );
}

export default App;