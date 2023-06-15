// import images
import Hero_person from "./assets/images/Hero/Homepic.png";

import family from "./assets/images/Skills/broken-family.png";
import estate from "./assets/images/Skills/real-estate.png";
import hack from "./assets/images/Skills/hack.png";
import justice from "./assets/images/Skills/justice.png";
import insurance from "./assets/images/Skills/insurance.png";
import Healthcare from "./assets/images/Skills/healthcare.png";

import signup from "./assets/images/Hireme/signup.png";

import services_logo1 from "./assets/images/Services/health.jfif.jpg";
import services_logo2 from "./assets/images/Services/services-4.jfif";
import services_logo3 from "./assets/images/Services/services-5.jfif";

import project1 from "./assets/images/projects/l1.jpg";
import project2 from "./assets/images/projects/l2.jpg";
import project3 from "./assets/images/projects/l3.jpg";
import person_project from "./assets/images/projects/project.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/about.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";
//icons for know more
// import {BiLogoGmail} from "react-icons/bi";
// import {BiSolidPhoneCall} from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { BsAlarmFill } from "react-icons/bs";
import { GrSupport } from "react-icons/gr";
import { CgSupport } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { BsTelephoneXFill } from "react-icons/bs";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiInjustice } from "react-icons/gi";
import { FaGavel } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#Areas",
      icon: GiInjustice,
    },
    {
      link: "#services",
      icon: MdMiscellaneousServices,
    },
    {
      link: "#Team",
      icon: FaGavel,
    },
    {
      link: "#about",
      icon: RiTeamLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],

  Login: {
    link: "#login",
  },

  hero: {
    title: "Legal Management Services",
    firstName: "Law",
    LastName: "Minder",
    btnText: "Join us",
    image: Hero_person,
    hero_content: [
      {
        count: "100+",
        text: "satisfied Clients",
      },
      {
        count: "20+",
        text: "Legal expertise",
      },
    ],
  },
  KnowMore: {
    title: "Transforming Legal for Professionals ",
    image: signup,
    para1:
      "The Case Lawyer is a Pakistan based law firm with leading practices in many of the most dynamic sectors. We are an exciting, forward-thinking law firm with a particular focus on Information Technology, Telecommunication, Cybercrimes, Financial & Corporate crimes and Family disputes, preferably Overseas Pakistani.",
    para2:
      "We believe “Technology is the future”, so we choose a collaborative approach with an intense focus on the end-user and consider carefully how to shape our services to add the most value to our clients.",
    para3:
      "We provide an online meeting platform where they can communicate with us and deliver their grievance in an actual manner.",
    para4:
      "We are proud to have established long-standing client relationships with leading Tech Companies; Overseas Pakistanis, Local Authorities, State Institutions and non-profit organisations.",
    para5:
      "As a full service law firm, we are able to support you on every aspect of your business and personal life providing relevant, realistic legal solutions that help you to navigate the complexities.",
    social_media: [
      {
        text: "eishshaukat219@gmail.com",
        icon: SiGmail,
        link: "mailto:eishashaukat219@gmail.com",
      },
      {
        text: "+03238459887",
        icon: BsTelephoneXFill,
        link: "https://wa.me/1234567890",
      },
      {
        text: "shehrox_dxb",
        icon: BsInstagram,
        link: "https://instagram.com/shehrox_dxb?igshid=NTc4MTIwNjQ2YQ==",
      },
      {
        text: "Working hours Mon-Sun: 9am – 9pm",
        icon: BsAlarmFill,
      },
      {
        text: "24/7 Support",
        icon: CgSupport,
      },
    ],
    know_content: [
      {
        count: "4.5 ",
        text: "Our Best Skilled Attorneys, Trust Score ",
      },
      {
        count: "20+",
        text: "Legal expertise",
      },
    ],
  },
  Service1: {
    title: "Transforming Legal for Professionals ",
    image: signup,
    part: "Litigation and Dispute Resolution",
    para1:"Negotiation and settlement services to achieve favorable resolutions",
    para2:"Comprehensive analysis of legal issues and potential outcomes",
    para3:"Strategic advice on managing and mitigating legal risks",
    para4:"Alternative dispute resolution methods, such as mediation and arbitration",
    para5:"Expert legal representation in litigation cases",
    social_media: [
      {
        text: "eishshaukat219@gmail.com",
        icon: SiGmail,
        link: "mailto:eishashaukat219@gmail.com",
      },
      {
        text: "+03238459887",
        icon: BsTelephoneXFill,
        link: "https://wa.me/1234567890",
      },
      {
        text: "shehrox_dxb",
        icon: BsInstagram,
        link: "https://instagram.com/shehrox_dxb?igshid=NTc4MTIwNjQ2YQ==",
      },
      {
        text: "Working hours Mon-Sun: 9am – 9pm",
        icon: BsAlarmFill,
      },
      {
        text: "24/7 Support",
        icon: CgSupport,
      },
    ],
    know_content: [
      {
        count: "4.5 ",
        text: "Our Best Skilled Attorneys, Trust Score ",
      },
      {
        count: "20+",
        text: "Legal expertise",
      },
    ],
  },
  Areas: {
    title: "What We Do",
    subtitle: "Our Practise Areas",
    skills_content: [
      {
        name: "Family Disputes",
        para: "Resolving family disputes with compassion and expertise.",
        logo: family,
        line1:
          "Family disputes can arise in various aspects of familial relationships, including divorce, child custody, property division, spousal support, and more.",
        line2:
          "When families face conflicts and challenges, family law professionals provide vital support in navigating the complexities of these disputes.",
        line3:
          "Their goal is to help families reach resolutions that promote stability, emotional well-being, and a positive future for all family members involved",
      },
      {
        name: "Insurance Law",
        para: "Navigating the complexities of insurance law to protect your rights and interests",
        logo: insurance,
        line1:
          "Insurance law plays a crucial role in safeguarding the rights and interests of individuals and businesses when it comes to insurance policies and claims. ",
        line2:
          "Insurance lawyers specialize in navigating the intricate legal landscape surrounding insurance contracts, coverage disputes, policy interpretation, and claim settlements.",
        line3:
          "They work diligently to ensure that insurance policies are properly enforced, claims are processed fairly, and clients are protected from bad faith practice.",
      },
      {
        name: "Social Law",
        para: "Advocating for social justice and equality through comprehensive legal solutions",
        logo: hack,
        line1:
          "Social law encompasses a broad range of legal issues focused on promoting social justice, equality, and human rights. ",
        line2:
          "Social law lawyers specialize in addressing matters such as discrimination, labor rights, social security, welfare benefits, immigration, and civil liberties. ",
        line3:
          "They also play a vital role in shaping policies and legislation to foster a more inclusive and equitable society.",
      },
      {
        name: "Domestic Law",
        para: "Protecting families and resolving domestic legal matters with compassion and expertise",
        logo: justice,
        line1:
          "Domestic law attorneys specialize in providing legal support and guidance in areas such as divorce, child custody, adoption, spousal support, domestic violence, and more.",
        line2:
          "Their role is to navigate the complex legal landscape and help individuals and families find fair and equitable resolutions to their domestic issues. ",
        line3:
          "They provide legal advice, represent clients in negotiations and court proceedings, and strive to protect the rights and welfare of all parties involved. ",
      },
      {
        name: "Estate Law",
        para: "Protecting your real estate interests with expert legal guidance",
        logo: estate,
        line1:
          " Real estate law encompasses a wide range of legal issues related to property, transactions, and ownership rights.",
        line2:
          "Real estate lawyers specialize in navigating complex legal matters such as property contracts, title searches, zoning regulations, land use disputes,",
        line3:
          "They ensuring that your real estate ventures are legally sound and successful.",
      },
      {
        name: "Healthcare",
        para: "Navigating the legal complexities of healthcare to safeguard your rights and well-being",
        logo: Healthcare,
        line1:
          "Healthcare law professionals specialize in understanding and navigating the legal complexities surrounding medical practice, patient rights, healthcare regulations, compliance, and healthcare-related transactions.",
        line2:
          " Their expertise is essential in addressing legal challenges, advocating for patient rights, and promoting ethical practices within the healthcare industry.",
        line3:
          " They play a vital role in ensuring that healthcare providers, organizations, and patients adhere to legal and ethical standards. ",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "Why Choose Us",
    service_content: [
      {
        title: "Litigation and Dispute Resolution",
        para: "Our team delivers efficient dispute resolution services, striving to protect your interests",
        logo: services_logo1,
      },
      {
        title: "Contract Drafting and Review",
        para: "Ensure the protection of your agreements with legally sound documents tailored to your specific needs.",
        logo: services_logo2,
      },
      {
        title: "Legal Advice and Consultation",
        para: "Offering personalized consultations to address your concerns,and help you make informed decisions.",
        logo: services_logo3,
      },
    ],
  },
  Team: {
    link: "#Team",
    title: "Team",
    subtitle: "Our Lawyers",
    image: person_project,
    project_content: [
      {
        title: "Sara Shabir",
        image: project1,
      },
      {
        title: "Hassan Murtaza",
        image: project2,
      },
      {
        title: "Amjad Babar",
        image: project3,
      },
      {
        title: "Sara Shabir",
        image: project1,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "Our CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“They listened to my concerns, provided expert advice, and fought tirelessly on my behalf. Thanks to their expertise and commitment, I achieved a favorable outcome. I highly recommend their services!”",
        img: avatar1,
        name: "Talha Anwar",
      },
      {
        review:
          "Working with this law firm was an exceptional experience. Their attention to detail, extensive knowledge, and strategic approach exceeded my expectations.",
        img: avatar2,
        name: "Wakar Asad",
      },
      {
        review:
          "“IThey took the time to explain complex legal concepts in a way that I could understand, and I always felt well-informed and supported throughout the process. Their professionalism and expertise truly set them apart. ",
        img: avatar3,
        name: "Abdullah",
      },
      {
        review:
          "“I cannot express my gratitude enough to the dedicated team at this law firm. They provided me with exceptional legal representation and went above and beyond to fight for my rights.”",
        img: avatar4,
        name: "Hassan",
      },
    ],
  },
  Aboutus: {
    title: "About Us",
    subtitle: "Who We are",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "The Case Lawyer is keeping pace with a sector-diverse team of litigation and consultancy specialists on hand to assist clients with whatever conflicts they may face.Among our clients, we approach technology companies providing internet-related services and products, software & web development services, e-learning platforms, consulting and digital services, pharmaceutical and medical lab companies, as well as telecom institutions.",
    btnText: "Click to Know More",
  },
  Contact: {
    title: "Contact Us",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "eishshaukat219@gmail.com",
        icon: GrMail,
        link: "mailto:eishashaukat219@gmail.com",
      },
      {
        text: "+03238459887",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "shehrox_dxb",
        icon: BsInstagram,
        link: "https://instagram.com/shehrox_dxb?igshid=NTc4MTIwNjQ2YQ==",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
