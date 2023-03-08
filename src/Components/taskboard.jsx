import React, { useState } from "react";
import background from "../pngs/Taskboard.png";

export const Taskboard = () => {
  const [tasks, setTasks] = useState({
    task: ""
  });
  const [alltask, setAllTask] = useState([])

  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name] : e.target.value
    })
  }

  const handleAddPost = () => {
    setAllTask([...alltask, tasks?.task])
  };

  console.log(alltask);

  const handleDelete = (e) => {
    this.setState({
      task: this.state.tasks.filter(e => {
        return e.id !== tasks
      })
    })
  };

  return (
    <div
      className="bg-primary bg-contain border flex md:flex-row sm:flex-row flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container items-center justify-between mx-auto bg-white p-20 w-1/2 my-5 rounded-md shadow-xl">
        <div className="box-content items-center justify-center ">
          <h1 className="p-6 text-2xl pl-4 text-center font-semibold pb-5 ">
            What needs to be done?
          </h1>
          <input
            className="placeholder:italic bg-grey w-full border-pink rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border"
            placeholder="Input your task here...."
            type="text"
            name="task"
            onChange={(e) => handleChange(e)}
            value={tasks?.task}
          />
          <div className="p-4 pt-6 w-full">
            <button
              className="px-5 py-2 w-full border rounded text-lg font-bold text-white bg-pink"
              type="button"
              onClick={() => handleAddPost()}
            >
              Add
            </button>
          </div>

          <div className="px-8 pt-4 flex flex-wrap justify-center space-x-10">
            <button
              className="px-5 py-2 w-1/4 border rounded text-lg font-bold text-pink border-pink bg-grey"
              type="button"
            >
              All
            </button>
            <button
              className="px-5 py-2 w-1/4 border rounded text-lg font-bold text-pink border-pink bg-grey"
              type="button"
            >
              Active
            </button>
            <button
              className="px-5 py-2 w-1/4 border rounded text-lg font-bold text-pink border-pink bg-grey"
              type="button"
            >
              Completed
            </button>
          </div>

          <div className="text-xl font-bold pt-6">
            <p>2 out of 3 items completed</p>
          </div>

          {alltask?.map((item, index) => (
          <div>
          <div className=" pt-4 flex flex-wrap items-center space-x-10">
            <input className="bg-grey w-10 h-10" type="checkbox" />
            <span>{item}</span>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              className="px-5 py-2 w-full border rounded text-lg font-bold text-pink border-pink bg-grey"
              type="button"
            >
              Edit
            </button>
            <button
              className="px-5 py-2 w-full border rounded text-lg font-bold text-white bg-primary"
              type="button"
              onChange={(e) => handleDelete(e)}
            >
              Delete
            </button>
          </div>
        </div>
          ))}

          <hr className="my-10" />

          <div className="flex gap-5 mt-5">
            <button
              className="px-5 py-2 w-full border rounded text-lg font-bold text-white bg-blue"
              type="button"
            >
              Check All
            </button>
            <button
              className="px-5 py-2 w-full border rounded text-lg font-bold text-white bg-blue"
              type="button"
            >
              Remove Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskboard;
