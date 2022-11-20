import React from "react";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import DentalCare from "../DentalCare/DentalCare";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <InfoCards />
      <Services />
      <DentalCare />
      <Appointment />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
