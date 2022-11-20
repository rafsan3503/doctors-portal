import React from "react";
import care from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <section className="my-48">
      <div className="lg:flex justify-evenly items-center w-full">
        <img src={care} alt="" className="w-96 rounded-lg" />
        <div className="w-1/2">
          <h2 className="text-4xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className="py-6">
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

export default DentalCare;
