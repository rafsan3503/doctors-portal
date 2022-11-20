import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Winson Harry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "California",
    },
    {
      id: 2,
      name: "Winson Harry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "California",
    },
    {
      id: 3,
      name: "Winson Harry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "California",
    },
  ];
  return (
    <div className="my-20 mx-12">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-primary text-xl font-bold">Testimonials</h2>
          <p className="text-4xl">What Our Patients Says</p>
        </div>
        <div>
          <img src={quote} className="w-12 lg:w-48" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {reviewsData.map((review) => (
          <Testimonial key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
