import React from "react";
import welcomepic from "../pngs/welcome.png";
import background from "../pngs/Rectanglew.png";

const welcome = () => {
  return (
    <div className="flex">
      {/* DESIGN N NAME */}
      <div
        className="w-1/2"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "start",
          height: "100vh",
        }}
      >
        <p className=" text-3xl my-auto font-semibold ">
          <img src={welcomepic} alt="logo" className="pt-10 pb-80" />
        </p>
        <div className="text-5xl text-center pt-6">
          <span className="text-primary font-extrabold text-8xl">MASTER</span>
          <span className="text-secondary font-extrabold text-8xl">TICK</span>
        </div>
      </div>

      {/* FORM */}
      <div className="className">
        <div className="mt-20 text-center mx-96 justify-center">
          <h1 className="text-3xl font-bold">Welcome Back !</h1>
          <p className="text-xl">Please enter your details</p>
        </div>
      </div>
    </div>
  );
};

export default welcome;
