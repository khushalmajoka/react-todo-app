import React from "react";

const List = ({ taskList }) => {
  return (
    <>
    {taskList.length >= 1 && <div className="max-h-80 overflow-auto shadow-xl flex rounded-xl bg-blue-50 ">
      <div className="flex flex-row m-8 justify-center">
        <div className="">
          {taskList.map((task) => (
              <div className="w-fit bg-indigo-600 m-3 p-2 rounded-lg">
                <h3 className="text-white">{task}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>}
    </>
  );
};

export default List;
