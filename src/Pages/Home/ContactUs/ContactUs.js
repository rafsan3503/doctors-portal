import React from "react";
import bg from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div>
      <div
        className="hero py-16"
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      >
        <form>
          <div>
            <h2 className="text-primary text-center text-xl font-bold">
              Contact us
            </h2>
            <p className="text-white text-4xl">Stay Connected with us</p>
          </div>
          <div className="mt-10 mb-5">
            <input
              type="text"
              placeholder="Email address"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-5 mb-5">
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-5 mb-5">
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="btn btn-primary text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
