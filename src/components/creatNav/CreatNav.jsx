import React from "react";
import NavData from "./NavData";
const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Profile", path: "/profile" },
];

const CreatNav = () => {
  return (
    <div>
      <ul className="md:flex gap-10">
        {routes.map((route) => (
          <NavData route={route}></NavData>
        ))}
      </ul>
    </div>
  );
};

export default CreatNav;
