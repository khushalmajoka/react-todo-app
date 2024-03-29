import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoTriangleRight, GoTriangleDown } from "react-icons/go";
import React, { useState } from "react";

const List = ({ taskList, heading, setCompletedTaskList, setTaskList }) => {
  const [dropDown, setDropDown] = useState(true);
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

  const handleUpClick = () => {
    setDropDown(false);
  };

  const handleDownClick = () => {
    setDropDown(true);
  };

  return (
    <div className="flex flex-col shadow-cardShadow w-4/5 p-5 rounded-xl bg-cardBackgroundColor ">
      <div className="flex text-todoText font-Outfit font-extrabold text-4xl">
        {dropDown ? (
          <GoTriangleDown
            className="mr-2 mt-1 cursor-pointer"
            onClick={handleUpClick}
          />
        ) : (
          <GoTriangleRight
            className="cursor-pointer mr-2 mt-1"
            onClick={handleDownClick}
          />
        )}
        {heading}
      </div>
      {dropDown && taskList.length > 0 && (
        <div className="flex flex-col m-8 mb-0 mt-3 justify-center">
          {taskList.map((task, index) => (
            <div
              className="w-fit flex max-w-full m-3 p-2 bg-btnBackgroundColor rounded-lg"
              key={index}
            >
              {heading === "Tasks:" && (
                <input
                  type="checkbox"
                  className="mr-[0.5rem] bg-[#f1faee] ml-1"
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              )}
              {heading === "Tasks:" ? (
                <h3 className="text-[#f1faee] mb-1 break-all pl-1 font-medium text-lg">
                  {task}
                </h3>
              ) : (
                <h3 className="text-[#f1faee] line-through break-all mb-1 pl-1 font-medium text-lg">
                  {task}
                </h3>
              )}
              <FontAwesomeIcon
                color="#e63946"
                icon={faTrash}
                onClick={(event) => handleDelete(event, index)}
                className="ml-8 mt-1.5 mr-2 hover: cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
//
export default List;
