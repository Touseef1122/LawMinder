import React from "react";
import aboutImg from "../assets/images/Profile/l1.jpg";
import {createElement} from "react";
import { content } from "../Content";

const Profile1 = () => {
  const { Profile1} = content;  


  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Case", count: "10" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="profile" className="py-10 text-dark">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sara <span className="text-cyan-600">Shabir</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Social Lawyer</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3"   data-aos="fade-right">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              As a social lawyer, I am dedicated to advocating for social justice and representing clients 
              who are facing legal challenges related to social issues. 
              I have a deep passion for using the law as a tool to drive
               positive change and address systemic inequalities.
               My practice focuses on a wide range of social justice matters,
            including civil rights, discrimination, access to education, housing, healthcare, 
            and employment issues. I work closely with individuals, community organizations,
              and advocacy groups to fight against injustice and promote equality.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-dark">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
          </div>
          <div className="">
      
      <div className="flex-1 flex flex-col gap-5">
            { Profile1.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-right"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-grey" >{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
        </div>
          </div>
          </div>
          <div className="flex-1 md:mt-n8 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg mt-4 lg:mt-n20 ">
  <img
    data-aos="fade-left"
    data-aos-duration="1500"
    src={aboutImg}
    alt=""
    className="w-full object-cover bg-cyan-600 rounded-xl lg:mt-n10"
  />
</div>
  </div>
          
        </div>
      </div>     
    </section>
  );
};

export default Profile1;
