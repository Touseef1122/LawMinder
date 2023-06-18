// import content
import { useEffect,useState ,createElement} from "react";
import { content } from "../Content";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import {AiTwotonePhone} from "react-icons/ai"

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";


const KnowMore = () => {
  const { hero,KnowMore} = content;
  const navigate=useNavigate();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
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
    <section id="home" className="overflow-hidden -mt-8">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-center text-3xl">{KnowMore.title}</h2>
          <br />
         
          <div className="flex flex-col gap-10 mt-10">
            {KnowMore.know_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={KnowMore.image}
            data-aos="slide-down"
            alt="..."
            className="h-full object-cover"
          />
          
        </div>
        <img
            src={KnowMore.image1}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
      </div>
    </section>
    <section className=" flex items-center lg:flex-row flex-col-reverse gap-5">
      <div className="container flex flex-col items-center lg:items-start">
      <div className="text-center lg:text-left leading-7 mt-7">
      <p className="text-center lg:text-left">{KnowMore.para1}</p>
      <p className="text-center lg:text-left">{KnowMore.para2}</p>
      <p className="text-center lg:text-left">{KnowMore.para3}</p>
      <p className="text-center lg:text-left">{KnowMore.para4}</p>
      <p >{KnowMore.para5}</p>
      </div>
      <div className="mt-5">
      <h2 className="title mb-5">Our information</h2>
      <div className="flex-1 flex flex-col gap-5">
            {KnowMore.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-grey">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
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

export default KnowMore;
