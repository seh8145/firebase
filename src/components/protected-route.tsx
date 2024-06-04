import { Navigate } from "react-router-dom";
import { auth } from "../routes/firebase";
import Home from "../routes/home";
import Profile from "../routes/profile";
import Layout from "./layout";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return <Layout />
} 