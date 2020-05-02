import React from "react";

const BikeList = (props) => (
  <table>
    <thead>
      <tr>
        <th>Manufacturer</th>
        <th>Model</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {props.bikes.map((bike) => {
        return (
          <tr>
            <td>{bike.manufacturer}</td>
            <td>{bike.model}</td>
            <td>${bike.price}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default BikeList;
