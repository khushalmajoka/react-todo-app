import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const List = ({ taskList, heading, setCompletedTaskList, setTaskList }) => {
  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    const task = taskList[index];

    if (isChecked) {
      setTaskList((prevTaskList) =>
        prevTaskList.filter((task) => task !== taskList[index])
      );
      setCompletedTaskList((prevCompletedTask) => [...prevCompletedTask, task]);
      event.target.checked = false;
    }
  };

  const handleDelete = (event, index) => {
    if (heading === "Tasks:") {
      setTaskList((prevTaskList) => {
        const newTaskList = [...prevTaskList];
        newTaskList.splice(index, 1);
        return newTaskList;
      });
    } else {
      setCompletedTaskList((prevCompletedTaskList) => {
        const newCompletedTaskList = [...prevCompletedTaskList];
        newCompletedTaskList.splice(index, 1);
        return newCompletedTaskList;
      });
    }
  };  

  return (
    <div className="overflow-auto  flex flex-col shadow-cardShadow w-4/5 p-5 rounded-xl bg-cardBackgroundColor ">
      <div className="text-todoText font-Outfit font-extrabold text-4xl">
        {heading}
      </div>
      {taskList.length > 0 && (
        <div className="flex flex-col m-8 justify-center">
          {taskList.map((task, index) => (
            <div
              className="w-fit flex max-w-full m-3 p-2 bg-btnBackgroundColor rounded-lg"
              key={index}
            >
              {heading === "Tasks:" && (
                <input
                  type="checkbox"
                  className="mr-1 ml-1"
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              )}
              {heading === "Tasks:" ? (
                <h3 className="text-black mb-1 break-all pl-1 font-medium text-lg">
                  {task}
                </h3>
              ) : (
                <h3 className="text-black line-through break-all mb-1 pl-1 font-medium text-lg">
                  {task}
                </h3>
              )}
              <FontAwesomeIcon icon={faTrash} onClick={(event => handleDelete(event, index))} className="ml-8 mt-1.5 mr-2 hover: cursor-pointer" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
//
export default List;
