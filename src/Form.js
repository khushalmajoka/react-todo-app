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
    <div className="flex p-4 pl-7 pr-7 w-4/5 rounded-xl shadow-cardShadow justify-center bg-cardBackgroundColor">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <div className="flex flex-row w-full justify-evenly">
          <input
            type="text"
            name="title"
            id="title"
            value={task}
            onChange={handleTaskChange}
            className="w-3/4 h-14 border placeholder-[#1d3557] border-[#1d3557] text-lg font-Outfit bg-cardBackgroundColor focus:outline-none focus:border-gray-500 focus:border-2 rounded-md m-3 mr-5 p-5"
            placeholder="Enter the Task"
          />
          <button
            type="submit"
            className="justify-center w-20 h-14 text-lg rounded-md border border-transparent bg-btnBackgroundColor m-3 p-2 pl-4 pr-4 font-medium text-[#f1faee] shadow-sm hover:bg-[#14243b]"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
