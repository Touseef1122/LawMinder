import React, {createElement, useRef } from "react";
import person from "../assets/images/Hireme/person.png"
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import {BsArrowLeftCircleFill} from 'react-icons/bs'
const Signup = () => {
  const form = useRef();
  const navigate=useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    const name = form.current.name.value;
    const email = form.current.email.value;
    const password = form.current.password.value;
    const profession = form.current.profession.value;
    const cnic = form.current.cnic.value;
    const phoneNumber = form.current.phoneNumber.value;
    const city = form.current.city.value;
    // Perform signup/authentication
    // ...
  };

  const handleLogin = () => {
    // Implement your login logic here for the login button
    // ...
  };

  return (
    <section className="bg-dark_primary text-white row" id="signup">
        <button className="col-6 px-5 mt-5" onClick={()=>navigate('/')}><BsArrowLeftCircleFill/></button>
      <div className="md:container px-5 py-14 col-6">
        <h2 className="title !text-white" data-aos="fade-down">
          Signup
        </h2>
        <br />
        <div className="flex gap-10 md:flex-row flex-col ">
          <form
            ref={form}
            onSubmit={handleSignup}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-slate-600 p-3 rounded"
            />
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
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="text"
              name="cnic"
              placeholder="CNIC"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <button className="btn self-start bg-white text-dark_primary">
              Signup
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            <img
              src={person}
              data-aos="slide-up"
              alt="..."
              className="h-full object-cover"
            />
            Already have an account?
            <button
              className="btn self-start bg-white text-dark_primary"
              onClick={()=>navigate('/login')}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
