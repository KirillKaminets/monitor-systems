import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PersonalAccountPage from "../pages/PersonalAccountPage/PersonalAccountPage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";

const RoutsPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/personal" element={<PersonalAccountPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
};
export default RoutsPage;
