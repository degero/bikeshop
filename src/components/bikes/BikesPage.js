import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BikeList from "./BikeList";

export function BikesPage(props) {
  let bikes = [];
  useEffect(() => {}, []);
  return (
    <>
      <h1>Bikes</h1>
      <Link to="/bikeform">Add bike</Link>
      <BikeList bikes={bikes}></BikeList>
    </>
  );
}

export default BikesPage;
