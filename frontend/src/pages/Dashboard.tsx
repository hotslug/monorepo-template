import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('No token found, redirecting...');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('/api/dashboard-data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error('Failed to fetch dashboard data');
          navigate('/login'); // redirect if unauthorized
          return;
        }

        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        navigate('/login'); // fallback redirect if error happens
      }
    };

    fetchDashboardData();
  }, [navigate]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      <p className="mt-4">{message}</p>
    </div>
  );
};
