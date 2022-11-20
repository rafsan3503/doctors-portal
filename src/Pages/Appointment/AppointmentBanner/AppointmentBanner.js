import React from "react";
import background from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero py-20" style={{ background: `url(${background})` }}>
      <div className="hero-content justify-between w-full flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:w-1/2" alt="" />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
