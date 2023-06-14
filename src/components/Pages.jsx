import React from 'react'


import Navbar from '../Layouts/Navbar';
import Hero from './Hero';
import Areas from "../components/Areas";
import Service from "../components/Services"
import LawyersTeam from './LawyersTeam';
import Testimonials from './Testimonials';
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import KnowMore from './KnowMore';
const Pages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KnowMore/>
      <Areas />
      <Service />
      <LawyersTeam />
      <Testimonials />
      <Aboutus />
      <Contact />
    </div>
  )
}

export default Pages