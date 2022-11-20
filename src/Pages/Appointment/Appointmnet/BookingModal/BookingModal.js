import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const BookingModal = ({ treatMent, selectedDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatMent;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const date = format(selectedDate, "PP");
    const booking = {
      name,
      phone,
      email,
      slot,
      price: price,
      appointmentDate: date,
      treatMent: treatMent.name,
    };
    // console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Success");
          setTreatment(null);
          refetch();
        } else {
          toast.error(data.message);
          setTreatment(null);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form className="mt-10" onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Type here"
              value={format(selectedDate, "PP")}
              disabled
              className="input input-bordered w-full mb-3"
            />
            <select name="slot" className="select select-bordered w-full mb-3">
              {slots.map((option, _idx) => (
                <option key={_idx}>{option}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              defaultValue={user?.displayName}
              disabled
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="Email"
              name="email"
              placeholder="Email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full mb-3"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={price}
              disabled
              className="input input-bordered w-full mb-3"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Phone Number"
              className="btn btn-secondary text-white w-full mb-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
