/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function signUp() {
  const [formStatus, setFormStatus] = React.useState("Login");
  const [login, setlogin] = useState(false);
  const [signup, setsignup] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { confirmPassword, email, password, username } = e.target.elements;
    let conFom = {
      confirmPassword: confirmPassword?.value,
      username: username?.value,
      email: email?.value,
      password: password.value,
    };
    console.log(conFom);
  };

  return (
    <div className="bg-transparent pb-64">
      <Fragment onSubmit={onSubmit}>
        <div className="pl-32 items-center pt-32 text-center justify-center">
          <h1 className="text-3xl font-bold">
            Welcome to your{" "}
            <span className="text-primary font-bold text-3xl">Master</span>
            <span className="text-secondary font-bold text-3xl">Tick</span>
          </h1>
          <p className="text-xl">Let's Start By Opening an Account</p>
        </div>
        {login ? (
          <form className="form-signin">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        ) : (
          <form className="form-signup">
            <div className="flex item-center justify-center pt-10 pb-10">
              <div className="w-80 space-y-4">
                {/* username */}
                <div className="w-96">
                  <label>UserName</label> <br />
                  <input
                    type="text"
                    name="username"
                    className="form-control border w-full h-10 p-6 rounded-md"
                    placeholder="Username"
                    required
                  />
                </div>
                {/* email */}
                <div>
                  <label>Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    className="form-control border w-full h-10 p-6 rounded-md"
                    placeholder="Email address"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label>Password</label> <br />
                  <input
                    type="password"
                    name="password"
                    className="form-control border w-full h-10 p-6 rounded-md"
                    placeholder="Password"
                    required
                  />
                </div>

                {/* password 2 */}
                <div>
                  <label>Confirm Password</label> <br />
                  <input
                    type="password"
                    name="password2"
                    className="form-control border w-full h-10 p-6 px-64 rounded-md"
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
            </div>

            {/* button */}
            <div className="flex flex-col">
              <button
                className="bg-secondary rounded-md text-center shadow-md mt-6 py-4  w-80 px-64 mx-auto text-white items-center hover:underline"
                type="submit"
                // onClick={() => setlogin(true)}
              >
                {formStatus}
              </button>
              <button
                className="bg-primary rounded-md text-center shadow-md mt-6 py-4 px-64 w-80 text-white mb-20 items-center mx-auto"
                type="submit"
              >
                Already have an Account ,{" "}
                <Link
                  to="/"
                  onClick={() => setlogin(true)}
                  className="w-80 hover:underline"
                >
                  Login
                </Link>
              </button>
            </div>
          </form>
        )}
      </Fragment>
    </div>
  );
}
export default signUp;
