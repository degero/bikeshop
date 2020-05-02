import React from "react";

const BikeList = ({ bikes }) => (
  <table>
    <thead>
      <tr>
        <th>Manufacturer</th>
        <th>Model</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {bikes.map((bike) => {
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
