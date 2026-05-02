function Navbar() {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  return (

    <div className="bg-black text-white p-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Team Task Manager
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-black px-4 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;