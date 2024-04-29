import React, { useEffect, useRef } from "react";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    const LoggedIn = JSON.parse(localStorage.getItem("logged"));
    if (!LoggedIn) {
      localStorage.setItem("logged", JSON.stringify(true));
      window.location.reload();
    }
  }, []);

  function handleSave(e) {
    e.preventDefault();
    const enteredUsername = username.current.value.trim();
    const enteredEmail = email.current.value.trim();
    const enteredPassword = password.current.value.trim();
    if ((enteredUsername === "", enteredEmail === "", enteredPassword === "")) {
      alert("please Enter email");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(enteredEmail)) {
      alert("Iltimos, to'g'ri elektron pochta manzili kiriting.");
      return;
    }
    const user = {
      name: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  }

  return (
    <>
      <div>
      <NavLink to="/" className="flex ml-80 text-3xl pt-14">
        <IoReturnUpBackSharp></IoReturnUpBackSharp>
      </NavLink>
        <div className="card w-96 m-auto p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
          <h2 className="text-center text-3xl font-bold mb-5">Register</h2>
          <form>
            <div className="mb-6 flex flex-col">
              <label htmlFor="email" className="text-xs">
                Username
              </label>
              <input
                ref={nameRef}
                type="name"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="name"
              />
            </div>

            <div className="mb-6 flex flex-col">
              <label htmlFor="email" className="text-xs">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="email"
              />
            </div>

            <div className="mb-6 flex flex-col">
              <label htmlFor="email" className="text-xs">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="input input-bordered mt-2 w-full max-w-xs"
                id="password"
              />
            </div>
          </form>

          <div className="text-center mb-3">
            <button
              onClick={handleSave}
              className="btn btn-info text-white w-full"
            >
              Register
            </button>
          </div>

          <div className="text-center flex justify-center gap-6">
            Already a member?{" "}
            <Link to="/login" className="text-info hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>  
    </>
  );
}

export default Register;
