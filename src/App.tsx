import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./features/authentication/pages/404/404";
import HomePage from "./features/authentication/pages/authorized/home_page";
import LoginPage from "./features/authentication/pages/unauthorized/signup_page";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
