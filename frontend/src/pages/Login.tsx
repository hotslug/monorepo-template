import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong");
			}

			// Save token to localStorage
			localStorage.setItem("token", data.token);

			// Optionally save user data too
			localStorage.setItem("user", JSON.stringify({ id: data._id, email: data.email }));

			// Navigate to dashboard or home page
			navigate("/dashboard"); // Change to wherever you want to go after login
		} catch (error: any) {
			setError(error.message);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

				{error && <div className="text-red-500 mb-4 text-center">{error}</div>}

				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700">
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 mt-1"
					/>
				</div>

				<div className="mb-6">
					<label htmlFor="password" className="block text-gray-700">
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 mt-1"
					/>
				</div>

				<button
					type="submit"
					className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
				>
					Login
				</button>
        <Link to="/register" className="text-blue-500 hover:text-blue-700">
					Don't have an account? Register here
				</Link>
			</form>
		</div>
	);
};
