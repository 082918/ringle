import data from "../data.jsx";
import { Outlet } from "react-router-dom";

function Event() {
  return (
    <>
      <div className="EventContainer">
        <div className="EvetnBox"> 12</div>
        <Outlet> </Outlet>
      </div>
    </>
  );
}

export default Event;
