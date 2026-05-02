import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      );

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem("token", data.token);

        alert("Login Successful");

        window.location.href = "/dashboard";

      } else {

        alert(data.message);

      }

    } catch (error) {

      alert("Login Failed");

    }
  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-96"
      >

        <h1 className="text-3xl font-bold mb-5 text-center">
          Login
        </h1>

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

        <button
          className="bg-black text-white w-full p-2 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;