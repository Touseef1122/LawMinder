import React, { useRef } from "react";
import person from "../assets/images/Hireme/signup.png"
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import {BsArrowLeftCircleFill} from 'react-icons/bs'
const Login = () => {
  const form = useRef();
  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    const email = form.current.email.value;
    const password = form.current.password.value;
    // Perform login authentication
    // ...
  };

  return (
    <section className="bg-dark_primary text-white row" id="login">
 <button className="col-6 px-5 mt-5" onClick={() => navigate('/signup')}>
  <BsArrowLeftCircleFill/>
</button>

      <div className="md:container px-5 py-14 col-6">
        <h2 className="title !text-white" data-aos="fade-down">
          Login
        </h2>
        <br />
        <div className="flex gap-10 md:flex-row flex-col ">
          <form
            ref={form}
            onSubmit={handleLogin}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
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
            <button className="btn self-start bg-white text-dark_primary">
              Login
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
          <img
            src={person}
            data-aos="slide-left"
            alt="..."
            className="h-full object-cover mb-10"
          />
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Login;
