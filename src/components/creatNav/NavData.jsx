import React from "react";

const NavData = ({route}) => {
  return (
      <li>
        <a href={route.path}>{route.name}</a>
      </li>
  );
};

export default NavData;
