import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Signup = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const username = form.current.username.value;
    const email = form.current.email.value;
    const password = form.current.password.value;

    try {
      const response = await fetch("http://127.0.0.1:8000/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Registration successful, perform desired actions
        console.log("Registration successful!");
        navigate("/"); // Redirect or perform additional actions
      } else {
        // Registration failed, handle error
        console.error("Registration failed!");
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      // Handle error and display appropriate message
    }
  };

  const handleLogin = () => {};

  return (
    <section className="bg-dark_primary text-white row" id="signup">
      <button className="col-6 px-5 mt-5" onClick={() => navigate("/")}>
        <BsArrowLeftCircleFill />
      </button>
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
              name="username"
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

            <button className="btn self-start bg-white text-dark_primary" onClick={handleSignup}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
