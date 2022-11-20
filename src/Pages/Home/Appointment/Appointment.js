import React from "react";
import bg from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <section
      className="hero my-32"
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className="flex flex-col items-center lg:flex-row">
        <img src={doctor} className="-mt-32 hidden lg:block" alt="" />
        <div>
          <h1 className="text-xl text-primary font-bold">Appointment</h1>
          <p className="text-4xl text-white">Make an appointment today</p>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
