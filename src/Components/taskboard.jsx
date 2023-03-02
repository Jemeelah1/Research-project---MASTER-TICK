import React from "react";
import background from "../pngs/Taskboard.png";

export const taskboard = () => {
  return (
    <div className="bg-primary bg-contain border" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
    }}>
      <div className="container items-center justify-between mx-auto bg-white p-20 m-20 w-1/2 rounded-md shadow-xl">
        <div className="box-content items-center justify-center ">
              <p className="p-6 text-xl font-semibold pb-5 ">
                What needs to be done?
              </p>
              <input className="placeholder:italic bg-grey w-full border-pink rounded-md py-3 pl-10  p-10 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm border" placeholder="Input your task here...." type="text" name="text"/>
              <div className="p-4 w-full">
                <input className="bg-pink p-2 w-full text-white rounded-md" type="button" value="Add"/>
              </div>

              <div className="px-8 flex flex-wrap justify-center">
                <input className="bg-grey p-2 w-1/3 border border-pink text-pink rounded-md" type="button" value="All"/>
                <input className="bg-grey w-1/3 border border-pink text-pink rounded-md" type="button" value="Active"/>
                <input className="bg-grey w-1/3 border border-pink text-pink rounded-md" type="button" value="Completed"/>
              </div>

        </div>
      </div>
    </div>
  );
};

export default taskboard;
