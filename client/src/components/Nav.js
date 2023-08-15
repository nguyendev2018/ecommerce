import React from "react";
import { navigation } from "../utils/constant";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-main h-[48px] py-2 border">
      {navigation.map(item => (
      <NavLink
          to={item.link}
          key={item.id}
          className={({ isActive }) => 
            isActive
            ? "pr-12 hover:text-primary text-primary"
            : "pr-12 hover:text-primary"
          } 
        >
          {item.values}
        </NavLink>
      ))}
    </div>
  );
};

export default Nav;
