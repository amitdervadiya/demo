import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");

  if (!user) {
    alert("⚠️ You must login first to access this page.");
    return <Navigate to="/" replace />;
  }

  return children;
}
