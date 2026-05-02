import { useState } from "react";

function Signup() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("Member");

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name,
            email,
            password,
            role
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Signup Successful");

        window.location.href = "/";

      } else {

        alert(data.message);

      }

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleSignup}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Signup
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-2 w-full mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 w-full mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          onChange={(e) => setRole(e.target.value)}
        >

          <option value="Member">
            Member
          </option>

          <option value="Admin">
            Admin
          </option>

        </select>

        <button
          className="bg-black text-white w-full p-2 rounded"
        >
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;