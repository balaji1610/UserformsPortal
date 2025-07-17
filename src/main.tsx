import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CreateAccount from "./Container/CreateAccount.tsx";

import DashboardPage from "./Pages/DashboradPage.tsx";
import FormsPage from "./Pages/FormsPage.tsx";
import UserProfilePage from "./Pages/UserProfilePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./app/store.tsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/userlists" element={<FormsPage />} />
          <Route
            path="/dashboard/userlists/:id"
            element={<UserProfilePage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
