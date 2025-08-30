import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ATTENDEE",
  });

  const handleRegister = () => {
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.find((u) => u.email === form.email)) {
      alert("Email already registered!");
      return;
    }

    // Save new user
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "/login";
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 p-4 font-[mont]">
      <img
         src="https://images.unsplash.com/photo-1647346425804-34383b95644b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Login page background"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="z-10 bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-xs md:max-w-sm lg:max-w-md transform transition-transform duration-500 ease-in-out hover:scale-105">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-4 text-gray-800 tracking-wide">
          Create an Account
        </h1>
        <p className="text-center text-gray-500 mb-6 text-xs md:text-sm">
          Join us and get started!
        </p>

        <div className="space-y-4">
          <input
            className="w-full p-2 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="w-full p-2 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="w-full p-2 md:p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-500 text-sm md:text-base"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <div className="relative">
            <select
              className="w-full p-2 md:p-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm md:text-base cursor-pointer"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="ATTENDEE">Attendee</option>
              <option value="ORGANIZER">Organizer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-black text-white font-bold py-2 md:py-3 mt-6 rounded-xl hover:bg-[#316F7E] transition-colors duration-300 shadow-md transform hover:scale-105"
        >
          Register
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;