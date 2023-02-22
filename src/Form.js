import React, { useState } from "react";

const Form = ({ setTaskList }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      setTaskList((prevTasks) => [...prevTasks, task]);
      setTask("");
    }
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="flex m-16 h-40 rounded-xl pl-3 pr-3 shadow-xl justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-lg p-5 sm:overflow-hidden"
      >
        <label
          htmlFor="title"
          className="block text-2xl font-medium text-gray-700"
        >
          To-Do
        </label>
        <div className="flex flex-row  justify-center">
          <input
            type="text"
            name="title"
            id="title"
            value={task}
            onChange={handleTaskChange}
            className="w-80 border border-gray-200 bg-blue-50 focus:outline-none focus:border-gray-500 focus:border-2 rounded-md m-3 p-2 sm:text-sm md:text-md"
            placeholder="Enter the Task"
          />
          <button
            type="submit"
            className="justify-center rounded-md border border-transparent bg-indigo-600 m-3 p-2 pl-4 pr-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
