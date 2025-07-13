import React from "react";
import { Hero, Services, Contact, About, Testimonial } from "@/components/index";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;
