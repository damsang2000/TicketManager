import { Button } from "antd";
import React from "react";

const Buttons = (props: any) => {
  return (
    <div>
      <Button
        className={`btn-handle 
        ${props.filter ? props.filter : ""} 
        ${props.invoke ? props.invoke : ""}
        ${props.custom ? props.custom : ""}`}
        danger
      >
        {props.name}
      </Button>
    </div>
  );
};

export default Buttons;
