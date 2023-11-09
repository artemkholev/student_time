import { Route, Routes } from "react-router-dom";

import { PageWrapper } from "../widgets/PageWrapper"
import { AuthContainer } from "../entities/containers/AuthContainer";
import { MainPage } from "./MainPage";
import { RegistrationContainer } from "../entities/containers/RegistrationContainer";
import { UserProfileContainer } from "../entities/containers/UserProfile";
import { CatalogPage } from "./CatalogPage";


export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
         <Route index element={<MainPage />} />
         <Route path="auth/authenticate" element={<AuthContainer />} />
         <Route path="auth/register" element={<RegistrationContainer />} />
         <Route path="user" element={<UserProfileContainer />} />
         <Route path="catalog" element={<CatalogPage />} />
      </Route>
    </Routes>
    );
};