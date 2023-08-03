import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./features/authentication/pages/404/404";
import HomePage from "./features/authentication/pages/authorized/home_page";
import LoginPage from "./features/authentication/pages/unauthorized/signup_page";
import PrivateRoutes from "./features/utils/components/private_routes";

function App() {

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
