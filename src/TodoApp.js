import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="flex">
      <div className="h-screen overflow-auto w-1/2 p-4 pl-20 pr-20">
        <Form setTaskList={setTaskList} />
        <div className="">
          <List taskList={taskList} />    
        </div>
      </div>
      <div className="mt-20">
        <List taskList={taskList} />
      </div>
    </div>
  );
};

export default TodoApp;
