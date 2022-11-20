import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { DayPicker } from "react-day-picker";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DashBoard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers: { authorization: localStorage.getItem("token") },
      }).then((res) => res.json()),
  });
  console.log(bookings);
  return (
    <div className="p-10">
      <div className="pt-10 pb-3 flex justify-between">
        <h2 className="text-3xl">My Appointment</h2>
        <button className="btn btn-outline">
          {format(selectedDate, "PP")}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-info">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Service</th>
              <th>Time</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, id) => (
              <tr key={booking._idx}>
                <th>{id + 1}</th>
                <td>{booking.name}</td>
                <td>{booking.treatMent}</td>
                <td>{booking.slot}</td>
                <td>
                  {!booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-xs btn-primary">
                        Pay Now
                      </button>
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
