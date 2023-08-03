import { Route, Routes } from "react-router-dom";
import SignupPage from "./features/authorization/pages/unauthorized/signup_page";
import HomePage from "./features/authorization/pages/authorized/home_page";
import NotFoundPage from "./features/authorization/pages/404/404";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
