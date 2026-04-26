import React, { useState } from "react";

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showText, setShowText] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"} min-h-screen p-6`}>

      <h1 className="text-3xl font-bold mb-6 text-center">
        useState + Tailwind Tasks
      </h1>

      <div className="grid gap-6 max-w-xl mx-auto">

        {/* Task 1 */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 1</h3>
          <input
            type="text"
            placeholder="Enter your Name"
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <p className="mt-2">
            {isLoggedIn ? "Welcome User" : "Please Login"}
          </p>
        </div>

        {/* Task 2 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 2</h3>
          <button
            onClick={() => setShowText(!showText)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Toggle Text
          </button>
          <p className="mt-2">{showText ? "Hello World!" : ""}</p>
        </div>

        {/* Task 3 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 3</h3>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Task 4 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 4</h3>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <p className="mt-2">{inputValue ? "Typing..." : "Empty"}</p>
        </div>

        {/* Task 5 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 5</h3>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            Increment
          </button>
          <p className="mt-2">
            {count} - {count % 2 === 0 ? "Even" : "Odd"}
          </p>
        </div>

        {/* Task 6 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 6</h3>
          <button
            onClick={() => setClicked(true)}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            {clicked ? "Button Clicked" : "Click Me"}
          </button>
        </div>

        {/* Task 7 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 7</h3>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p className="mt-2">
            {checked ? "Accepted" : "Not Accepted"}
          </p>
        </div>

        {/* Task 8 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 8</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <p className="mt-2">
            {password.length > 6 ? "Strong Password" : "Weak Password"}
          </p>
        </div>

        {/* Task 9 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 9</h3>
          <button
            onClick={() => setShowImage(!showImage)}
            className="bg-indigo-500 text-white px-4 py-2 rounded"
          >
            {showImage ? "Hide Image" : "Show Image"}
          </button>
          {showImage && (
            <img
              src="https://via.placeholder.com/150"
              alt="demo"
              className="mt-3 rounded"
            />
          )}
        </div>

        {/* Task 10 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-semibold mb-2">Task 10</h3>
          <select
            onChange={(e) => setOption(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">Select</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <p className="mt-2">
            {option === "student"
              ? "You selected Student"
              : option === "teacher"
              ? "You selected Teacher"
              : "Please select an option"}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Navbar;