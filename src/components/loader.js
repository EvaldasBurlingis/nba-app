import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="fw-center">
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={"#123abc"}
        loading={loading}
      />
    </div>
  );
};

export default Loader;
