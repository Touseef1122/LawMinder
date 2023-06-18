import React, { useRef } from "react";
import person from "../assets/images/Hireme/signup.png";
import Signup from "./Signup";
import Pages from "./Pages";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Login = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = form.current.username.value;
    console.log(username);
    const password = form.current.password.value;
    console.log(password);

    try {
      console.log("entered");
      const response = await fetch("http://127.0.0.1:8000/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("Login successful!");
        console.log("Response data:", data);
        navigate("/");
      } else {
        const errorData = await response.json();

        console.error("Login failed!");
        console.error("Error data:", errorData);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      // Handle error and display appropriate message
    }
  };

  return (
    <section className="bg-dark_primary text-white row" id="login">
      <button className="col-6 px-5 mt-5" onClick={() => navigate("/")}>
        <BsArrowLeftCircleFill />
      </button>

      <div className="md:container  loginform">
        <h2
          className="text-aling-center title !text-white"
          data-aos="fade-down"
        >
          Login
        </h2>
        <br />
        <div className="flex gap-10 md:flex-row flex-col fromsize">
          <form
            ref={form}
            onSubmit={handleLogin}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <button
              className="btn self-start bg-white text-dark_primary"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="flex-1 flex flex-col gap-5 justify-content-end">
              Don't  have an account?
              <button
                className="btn self-start bg-white text-dark_primary"
                onClick={() => navigate("/Signup")}
              >
                SignUp
              </button>
            </div>
          </form>
          <div className="flex-1 flex flex-col ">
            <img
              src={person}
              data-aos="slide-left"
              alt="..."
              className=" object-cover imgsize"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
