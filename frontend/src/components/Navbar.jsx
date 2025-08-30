import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 bg-transparent text-white flex justify-between items-center px-6 py-4 font-['mont']">
      <h1 className="text-3xl font-bold">EventHive</h1>
      <ul className="flex space-x-6 font-semibold">
        <li><a href="/" className="hover:text-indigo-300">Home</a></li>
        <li><a href="/login" className="hover:text-indigo-300">Login</a></li>
        <li><a href="/register" className="hover:text-indigo-300">Register</a></li>
        <li><a href="/create" className="hover:text-indigo-300">Create an Event</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;

