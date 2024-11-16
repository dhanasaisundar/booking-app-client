import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HotelSearchListPage from "./pages/HotelSearchListPage";
import HotelInfoPage from "./pages/HotelInfoPage";
import AccountPage from "./pages/AccountPage";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user/register" element={<RegisterPage />} />
          <Route path="/user/Login" element={<LoginPage />} />
          <Route path="/user/account" element={<AccountPage />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/hotel-search" element={<HotelSearchListPage />} />
            <Route path="/hotel-details/:id" element={<HotelInfoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "15px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            borderRadius: "12px",
            backgroundColor: "#fff",
            color: "var(--color-grey-900)",
            padding: "12px",
            fontSize: "14px",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "Roboto",
          },
        }}
      />
    </>
  );
}

export default App;
