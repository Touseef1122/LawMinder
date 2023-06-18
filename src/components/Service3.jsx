
import { useEffect, useState, createElement } from "react";
import { content } from "../Content";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Service3 = () => {
  const { hero, Service3 } = content;
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    <>
      <section id="home" className="bg-dark_primary overflow-hidden -mt-8">
        <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
          {/* first col */}
          <div className="pb-16 px-6 pt-5 " data-aos="fade-down">
            <h2 className="text-center title !text-white text-3xl">
              {Service3.title}
            </h2>
            <br />

            <div className="flex flex-col gap-10 mt-10">
              {Service3.know_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
                >
                  <h3 className="title !text-white">{content.count}</h3>
                  <p className="title !text-white">{content.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* sec col */}
          <div className="md:h-[37rem] h-96">
            <img
              src={Service3.image}
              data-aos="slide-up"
              alt="..."
              className="h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center lg:flex-row flex-col-reverse gap-5 pt-5">
        <div className="container flex flex-col items-center lg:items-start pt-5">
          <div className="text-center lg:text-left leading-7">
            <div>
              <h4 className="text-center">{Service3.part}</h4>
            </div>
            <h6 className="text-center lg:text-left">{Service3.para1}</h6>
            <h6 className="text-center lg:text-left">{Service3.para2}</h6>
            <h6 className="text-center lg:text-left">{Service3.para3}</h6>
            <h6 className="text-center lg:text-left">{Service3.para4}</h6>
            <h6>{Service3.para5}</h6>
          </div>
          <div className="mt-5">
            <h2 className="title mb-5">Our information</h2>
            <div className="flex-1 flex flex-col gap-5">
              {Service3.social_media.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 430}
                  className="flex items-center gap-2"
                >
                  <h4 className="text-grey">{createElement(content.icon)}</h4>
                  <a
                    className="font-Poppins"
                    href={content.link}
                    target="_blank"
                  >
                    {content.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service3;
