import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import ResetPassword from "../pages/auth/ResetPassword";
import Users from "../pages/users/Users";
import Dashboard from "../pages/dashboard/Dashboard";
import Persons from "../pages/persons/Persons";
import Loans from "../pages/loans/Loans";
import Payments from "../pages/payments/Payments";
import Reports from "../pages/reports/Reports";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../components/layout/MainLayout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔐 LOGIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<ResetPassword />} />

        {/* 🔒 SISTEMA */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <MainLayout>
                <Users />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/personas"
          element={
            <PrivateRoute>
              <MainLayout>
                <Persons />
              </MainLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/prestamos"
          element={
            <PrivateRoute>
              <MainLayout>
                <Loans />
              </MainLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/pagos"
          element={
            <PrivateRoute>
              <MainLayout>
                <Payments />
              </MainLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/reportes"
          element={
            <PrivateRoute>
              <MainLayout>
                <Reports />
              </MainLayout>
            </PrivateRoute>
          }
        />

        {/* 🔁 REDIRECCIÓN */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
