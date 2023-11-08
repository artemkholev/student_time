import { Route, Routes } from "react-router-dom";

import { PageWrapper } from "../widgets/PageWrapper"
import { AuthContainer } from "../containers/AuthContainer";
import { MainContainer } from "../containers/MainContainer";
import { RegistrationContainer } from "../containers/RegistrationContainer";
import { UserProfileContainer } from "../containers/UserProfile";


export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<PageWrapper />}>
         <Route index element={<MainContainer />} />
         <Route path="auth/authenticate" element={<AuthContainer />} />
         <Route path="auth/register" element={<RegistrationContainer />} />
         <Route path="user" element={<UserProfileContainer />} />
      </Route>
    </Routes>
    );
};