import React from "react";
import welcomepic from "../pngs/welcome.png";
import background from "../pngs/Rectanglew.png";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const welcome = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formStatus, setFormStatus] = React.useState("Login");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { email, password } = e.target.elements;
    let conFom = {
      email: email.value,
      password: password.value,
    };
    console.log(conFom);
  };

  return (
    <div className="flex space-x-48">
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
      <div>
        <div className="pl-32 items-center pt-48 text-center justify-center">
          <h1 className="text-3xl font-bold">Welcome Back !</h1>
          <p className="text-xl">Please enter your details</p>
        </div>
        <div className="pl-10">
          <form onSubmit={onSubmit}>
            <div className="mt-5 mx-auto space-x-20 space-y-10 flex justify-center items-center">
              <div className="space-y-4 w-full">
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="email">
                    EMAIL
                  </label>
                  <br />
                  <input
                    className="form-control border w-full h-10 p-2 rounded-md"
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3 space-y-4">
                  <label className="form-label" htmlFor="email" required>
                    PASSWORD
                  </label>
                  <br />
                  <input
                    className="form-control border w-full h-10 p-2 rounded-md"
                    type="password"
                    id="password"
                    placeholder="password"
                    required
                  />
                </div>
              </div>
            </div>
            <button
              className="bg-primary rounded-md text-center shadow-md mt-6 py-4  w-full text-white mb-20 items-center mx-auto"
              type="submit"
            >
              <Link to="/taskboard">{formStatus}</Link>
            </button>

            <hr className="mb-8 py-2 h-4 text-secondary" />

            <div className="w-96">
              <GoogleButton
                onClick={() => {
                  console.log("Google button clicked");
                }}
              />
            </div>
            <div className="flex space-x-1 pt-10">
              <p>Don’t have an account?</p>
              <Link to="/signup">
                <span className="text-skyblue font-bold hover:underline">
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* <Link t0="/" className="text-white">Go Back</Link> */}
    </div>
  );
};

export default welcome;
