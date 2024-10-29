import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const PriceCard = ({ card }) => {
  const { name, price, features, id } = card;
  return (
    <div className="bg-amber-400 rounded-lg p-5 text-red-600 flex flex-col items-center justify-center">
      <h1 className="text-2xl">Misson name : {name}</h1>
      <h1 className="text-xl">
        <span className="text-5xl">{price}</span>/month
      </h1>
      <h1 className="mt-10 flex-grow">
        {features.map((feature) => (
          <h1 className="flex gap-3 items-center ">
            <VscDebugBreakpointLog />
            {feature}
          </h1>
        ))}
        <button className="btn w-full mt-8">Enroll Now</button>
      </h1>
    </div>
  );
};

export default PriceCard;
