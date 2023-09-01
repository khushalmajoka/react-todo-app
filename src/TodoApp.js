import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completedTaskList, setCompletedTaskList] = useState([]);

  return (
    <div className="App flex flex-col bg-[#1d3557] min-h-screen h-fit">
      <div className="w-full z-10 text-5xl p-4 pl-8 bg-[#a8dadc] font-extrabold text-todoText font-Outfit shadow-cardShadow fixed">
        To-Do
      </div>
      <div className="flex flex-col mt-36 pb-14 items-center h-fit w-full">
        <div className="flex w-1/2 justify-center">
          <Form setTaskList={setTaskList} />
        </div>
        <div className="flex w-1/2 justify-center mt-12">
          <List
            taskList={taskList}
            heading="Tasks:"
            setCompletedTaskList={setCompletedTaskList}
            setTaskList={setTaskList}
          />
        </div>
        <div className="flex w-1/2 justify-center mt-12">
          <List
            taskList={completedTaskList}
            setCompletedTaskList={setCompletedTaskList}
            heading="Completed Tasks:"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
