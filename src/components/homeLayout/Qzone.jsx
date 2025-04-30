import React from "react";
import classimg from "../../assets/class.png";
import sweemingimg from "../../assets/swimming.png";
import playimg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 rounded-sm">
      <h2 className="font-bold mb-5"> Q Zone</h2>
      <div className="space-y-5 flex flex-col items-center">
        <img src={classimg  } alt="" />
        <img src={playimg} alt="" />
        <img src={sweemingimg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
