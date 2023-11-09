import { Route, Routes } from "react-router-dom";

import { PageWrapper } from "../widgets/PageWrapper"
import { AuthContainer } from "../entities/containers/AuthContainer";
import { MainPage } from "./MainPage";
import { RegistrationContainer } from "../entities/containers/RegistrationContainer";
import { UserProfileContainer } from "../entities/containers/UserProfile";
import { CatalogPage } from "./CatalogPage";
import { CalendarPage } from "./CalendarPage";
import { GoalsPage } from "./GoalsPage";
import { LibraryPage } from "./LibraryPage";
import { PrioritiesPage } from "./PrioritiesPage";


export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
        <Route index element={<MainPage />} />
        <Route path="auth/authenticate" element={<AuthContainer />} />
        <Route path="auth/register" element={<RegistrationContainer />} />
        <Route path="user" element={<UserProfileContainer />} />
        <Route path="user/catalog" element={<CatalogPage />} />
        <Route path="user/catalog/calendar" element={<CalendarPage />} />
        <Route path="user/catalog/goals" element={<GoalsPage />} />
        <Route path="user/catalog/library" element={<LibraryPage />} />
        <Route path="user/catalog/priorities" element={<PrioritiesPage />} />
      </Route>
    </Routes>
    );
};