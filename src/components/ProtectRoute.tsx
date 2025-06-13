import type { JSX } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }: { children: JSX.Element }) {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) { 
		return <Navigate to="/login" replace />;
	}

	return children;
}
