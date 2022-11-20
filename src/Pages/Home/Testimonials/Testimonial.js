import React from "react";

const Testimonial = ({ review }) => {
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{review.review}</p>
        <div className="flex items-center mt-10">
          <div className="avatar mr-3">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
