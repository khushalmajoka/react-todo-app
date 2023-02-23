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
    <div className="flex w-4/5 rounded-3xl shadow-cardShadow justify-center bg-cardBackgroundColor">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col rounded-lg p-6"
      >
        <div className="flex flex-row w-full justify-center">
          <input
            type="text"
            name="title"
            id="title"
            value={task}
            onChange={handleTaskChange}
            className="w-2/3 h-14 border border-gray-400 text-lg font-Outfit bg-cardBackgroundColor focus:outline-none focus:border-gray-500 focus:border-2 rounded-md m-3 mr-5 p-5"
            placeholder="Enter the Task"
          />
          <button
            type="submit"
            className="justify-center w-20 h-14 text-lg rounded-md border border-transparent bg-btnBackgroundColor m-3 p-2 pl-4 pr-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
