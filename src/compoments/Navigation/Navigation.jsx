import React from "react";

const Navigation = (props) => {
  return <header className={props.className}>{props.children}</header>;
};

export default Navigation;
