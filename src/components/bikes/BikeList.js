import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BikeList = ({ bikes, manufacturers, deleteItem }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model</th>
          <th>Price ($USD)</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {bikes && manufacturers ? (
          bikes.map((bike) => {
            return (
              <tr key={bike.id}>
                <td>{manufacturers?.find(r => r.id === bike.manufacturerId)?.name}</td>
                <td>{bike.model}</td>
                <td>${bike.price}</td>
                <td>
                  <Link to={"/bike/" + bike.slug} className="btn btn-link">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteItem(bike)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    </table>
  )
};

BikeList.propTypes = {
  bikes: PropTypes.array,
  manufacturers: PropTypes.array,
  deleteItem: PropTypes.func.isRequired,
};

export default BikeList;
