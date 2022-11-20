import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointOption from "./AppointOption";
import loader from "../../../assets/images/loading.gif";
import BookingModal from "../Appointmnet/BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [treatMent, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });
  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <img src={loader} alt="" />
      </div>
    );
  }
  return (
    <div className="my-16">
      <p className="text-center text-3xl text-secondary">
        Available Appointment on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {appointmentOptions.map((option) => (
          <AppointOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
        {treatMent && (
          <BookingModal
            treatMent={treatMent}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            refetch={refetch}
          />
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
