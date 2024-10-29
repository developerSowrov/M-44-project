import React, { useState } from "react";
import NavData from "./NavData";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Profile", path: "/profile" },
];
const CreatNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <IoClose className="text-2xl " />
        ) : (
          <IoMdMenu className="text-2xl " />
        )}
      </div>
      <ul
        className={`md:flex gap-10 absolute duration-1000 ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <NavData route={route}></NavData>
        ))}
      </ul>
    </div>
  );
};

export default CreatNav;
