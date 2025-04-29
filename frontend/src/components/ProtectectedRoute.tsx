import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  React.useEffect(() => {
    if (!token) {
      console.log('ProtectedRoute - No token found, redirecting to login');
      navigate('/login', { replace: true });
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};
