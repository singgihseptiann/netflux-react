import React from "react";
import { Button } from "react-bootstrap";

const ButtonReusable = ({ text, className = "btn btn-danger", ...props }) => {
  return (
    <Button className={className} {...props}>
      {text}
    </Button>
  );
};

export default ButtonReusable;
