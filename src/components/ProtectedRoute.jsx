import React from "react";
import { Navigate } from "react-router-dom";

// Simple mock auth check
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    alert("You must log in to view this page!");
    return <Navigate to="/" replace />;
  }
  return children;
}
