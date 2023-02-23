import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);

  return (
    <div className="overflow-auto pt-10 pl-28 pr-28 pb-20 h-screen">
      <div className="text-7xl font-extrabold text-todoText font-Outfit">
        To-Do
      </div>
      <div className="flex mt-8 justify-between">
        <div className="flex w-1/2 flex-col h-full">
          <div className="flex justify-center">
            <Form setTaskList={setTaskList} />
          </div>
          <div className="flex justify-center mt-12">
            <List taskList={taskList} heading="Tasks:" setCompletedTaskList={setCompletedTaskList} setTaskList={setTaskList}/>
          </div>
        </div>
        <div className="flex justify-center w-1/2 h-fit">
          <List taskList={completedTaskList} setCompletedTaskList={setCompletedTaskList} heading="Completed Tasks:" />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
