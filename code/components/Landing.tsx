import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col w-fit  pt-60 h-fit">
      <div className=" flex justify-end  text-2xl">SOLUTIONS</div>
      <div className=" flex justify-center  text-9xl">
        WONDERATA{" "}
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px white" }}
        >
          X
        </span>
      </div>
      <div className=" flex justify-start  text-xl">
        DREAM | DEVELOP | DELIVER
      </div>
    </div>
  );
};

export default Landing;
