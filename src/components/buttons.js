import React from "react";
import Button from "@material-ui/core/Button";

const Btn = ({ color, variant, click, style, text }) => {
  return (
    <Button color={color} variant={variant} className={style} onClick={click}>
      {text}
    </Button>
  );
};

export default Btn;
