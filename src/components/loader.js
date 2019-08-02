import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <BeatLoader
        sizeUnit={"px"}
        size={20}
        margin="4px"
        color={"#d4d4d4"}
        loading={true}
      />
  );
};

export default Loader;
