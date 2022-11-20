import React from "react";

const InfoCard = ({ card }) => {
  const { name, icon, bgClass, description } = card;
  return (
    <div>
      <div className={`card card-side shadow-xl ${bgClass} text-white p-4`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
