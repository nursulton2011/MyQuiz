import { Outlet } from "react-router";

import { Progress } from "../components";

export const Step = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Progress steps={10} activeStep={5} />
        <Outlet />
      </div>
    </div>
  );
};
