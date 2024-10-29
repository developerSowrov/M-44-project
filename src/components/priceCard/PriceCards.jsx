import React from "react";
import PriceCard from "./PriceCard";
const cards = [
  {
    id: 1,
    name: "Premium Membership",
    features: [
      "Unlimited Gym Access",
      "Access to Pool and Sauna",
      "5 Personal Training Sessions",
      "Free Diet Consultation",
      "Priority Booking for Classes",
    ],
    price: 500,
  },
  {
    id: 2,
    name: "Standard Membership",
    features: [
      "Gym Access",
      "Access to Group Classes",
      "2 Personal Training Sessions",
      "Discount on Diet Consultation",
    ],
    price: 300,
  },
  {
    id: 3,
    name: "Yoga Package",
    features: [
      "Unlimited Yoga Classes",
      "Access to Morning and Evening Sessions",
      "Free Yoga Mat Rental",
      "Beginner to Advanced Levels",
    ],
    price: 100,
  },
];

const PriceCards = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 ">
      {cards.map((card) => (
        <PriceCard key={card.id} card={card}></PriceCard>
      ))}
    </div>
  );
};

export default PriceCards;
