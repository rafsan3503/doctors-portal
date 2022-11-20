import React from "react";
import icon1 from "../../../assets/images/fluoride.png";
import icon2 from "../../../assets/images/cavity.png";
import icon3 from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: icon1,
      name: "Fluoride Treatment",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      icon: icon2,
      name: "Cavity Filling",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      icon: icon3,
      name: "Teeth Whitening",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <section className="my-16">
      <div>
        <h4 className="text-xl font-bold text-primary text-center">
          Our Services
        </h4>
        <p className="text-4xl text-center">Services we provide</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
