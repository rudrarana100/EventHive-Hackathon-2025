import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials!");
      return;
    }

    // Save session
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Redirect based on role
    if (user.role === "ORGANIZER") {
      window.location.href = "/dashboard/organizer";
    } else {
      window.location.href = "/dashboard/attendee";
    }
  };

  return (
    <div className="h-screen relative flex items-center justify-center p-4 font-['mont']">
      {/* Background Image Element */}
      <img
         src="https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Login page background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      
      
      {/* Login Form Content */}
      <div className="relative z-20 bg-white bg-opacity-80 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm lg:max-w-md transform transition-transform duration-500 ease-in-out hover:scale-105">

        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-4 text-gray-800 tracking-wide">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-6 text-xs md:text-sm">
          Sign in to your account
        </p>

        <div className="space-y-4">
          <input
            className="w-full p-2 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full p-2 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white font-bold py-2 md:py-3 mt-6 rounded-xl hover:bg-[#316F7E] transition-colors duration-300 shadow-md transform hover:scale-105"
        >
          Login
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;