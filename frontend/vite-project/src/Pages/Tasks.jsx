import { useEffect, useState } from "react";

import {
  getTasks,
  createTask,
  updateTask
} from "../Services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState("Low");

  const [dueDate, setDueDate] = useState("");

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks = async () => {

    const data = await getTasks();

    setTasks(data);
  };


  const handleCreateTask = async (e) => {

    e.preventDefault();

    await createTask({
      title,
      description,
      priority,
      dueDate
    });

    setTitle("");
    setDescription("");
    setPriority("Low");
    setDueDate("");

    fetchTasks();
  };


  const handleStatusChange = async (id, status) => {

    await updateTask(id, {
      status
    });

    fetchTasks();
  };

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-8">
        Tasks
      </h1>


      <form
        onSubmit={handleCreateTask}
        className="bg-white p-5 rounded shadow mb-8"
      >

        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 w-full mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Task Description"
          className="border p-2 w-full mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          className="border p-2 w-full mb-4"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <select
          className="border p-2 w-full mb-4"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >

          <option value="Low">
            Low
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="High">
            High
          </option>

        </select>

        <button
          className="bg-black text-white px-5 py-2 rounded"
        >
          Create Task
        </button>

      </form>


      {tasks.map((task) => (

        <div
          key={task._id}
          className="bg-white p-5 rounded shadow mb-4"
        >

          <h2 className="text-2xl font-semibold">
            {task.title}
          </h2>

          <p className="mt-2 text-gray-600">
            {task.description}
          </p>

          <div className="flex gap-3 mt-4">

            <span className="bg-yellow-200 px-3 py-1 rounded">
              {task.priority}
            </span>

            <span className="bg-blue-200 px-3 py-1 rounded">
              {task.status}
            </span>

          </div>

          <p className="mt-3 text-sm text-gray-500">

            Due:
            {" "}
            {task.dueDate?.slice(0, 10)}

          </p>


          <div className="flex gap-3 mt-4">

            <button
              onClick={() =>
                handleStatusChange(
                  task._id,
                  "To Do"
                )
              }
              className="bg-gray-300 px-3 py-1 rounded"
            >
              To Do
            </button>

            <button
              onClick={() =>
                handleStatusChange(
                  task._id,
                  "In Progress"
                )
              }
              className="bg-yellow-300 px-3 py-1 rounded"
            >
              In Progress
            </button>

            <button
              onClick={() =>
                handleStatusChange(
                  task._id,
                  "Done"
                )
              }
              className="bg-green-300 px-3 py-1 rounded"
            >
              Done
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Tasks;