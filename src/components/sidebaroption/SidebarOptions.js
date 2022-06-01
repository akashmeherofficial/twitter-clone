<<<<<<< HEAD
import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
// {`sidebarOptions ${active && "sidebarOptions--active"}`}
export default SidebarOptions;
=======
import React from "react";
import "./SidebarOptions.css";

const SidebarOptions = ({ active, text, Icon }) => {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};
// {`sidebarOptions ${active && "sidebarOptions--active"}`}
export default SidebarOptions;
>>>>>>> 0b5ae1b8b412baea96c19d0781b941b0290ad27f
