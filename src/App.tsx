import React from "react"

import { Route, Routes } from 'react-router-dom';
import { PageWrapper } from "./components/common/PageWrapper"

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
      
      </Route>
    </Routes>
  )
}

export default App