function TaskCard({ task }) {

  return (

    <div className="bg-white p-5 rounded shadow mb-4">

      <h2 className="text-2xl font-semibold">
        {task.title}
      </h2>

      <p className="text-gray-600 mt-2">
        {task.description}
      </p>

      <div className="flex gap-3 mt-4">

        <span className="bg-blue-200 px-3 py-1 rounded">
          {task.status}
        </span>

        <span className="bg-red-200 px-3 py-1 rounded">
          {task.priority}
        </span>

      </div>

      <p className="mt-4 text-sm text-gray-500">

        Due Date:
        {" "}
        {task.dueDate}

      </p>

    </div>
  );
}

export default TaskCard;