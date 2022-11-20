import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);

const Payment = () => {
  const booking = useLoaderData();
  return (
    <div>
      <h2 className="text-xl font-bold p-5">Payment for {booking.treatMent}</h2>
      <p>
        Please Pay
        {booking.price} for your appointment on {booking.appointmentDate} at{" "}
        {booking.slot}
      </p>
      <div className="w-96 p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
