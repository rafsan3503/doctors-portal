import React from "react";

const AppointOption = ({ option, setTreatment }) => {
  const { name, slots, price } = option;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-secondary text-center text-2xl font-medium">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available today
        </p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(option)}
            htmlFor="my-modal-3"
            disabled={slots.length === 0}
            className="btn btn-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointOption;
