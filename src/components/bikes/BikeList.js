import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BikeList = ({ bikes }) => (
  <table>
    <thead>
      <tr>
        <th>Manufacturer</th>
        <th>Model</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {bikes.map((bike) => {
        return (
          <tr>
            <td>{bike.manufacturer}</td>
            <td>{bike.model}</td>
            <td>${bike.price}</td>
            <td>
              <Link to={"/bike/" + bike.slug}>Edit</Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

BikeList.propTypes = {
  bikes: PropTypes.array.isRequired,
};

export default BikeList;
