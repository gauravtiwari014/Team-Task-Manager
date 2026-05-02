function Dashboard() {

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded shadow">

          <h2 className="text-xl font-semibold">
            Total Tasks
          </h2>

          <p className="text-3xl mt-3">
            12
          </p>

        </div>

        <div className="bg-white p-5 rounded shadow">

          <h2 className="text-xl font-semibold">
            Completed
          </h2>

          <p className="text-3xl mt-3">
            5
          </p>

        </div>

        <div className="bg-white p-5 rounded shadow">

          <h2 className="text-xl font-semibold">
            Pending
          </h2>

          <p className="text-3xl mt-3">
            4
          </p>

        </div>

        <div className="bg-white p-5 rounded shadow">

          <h2 className="text-xl font-semibold">
            Overdue
          </h2>

          <p className="text-3xl mt-3">
            3
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;