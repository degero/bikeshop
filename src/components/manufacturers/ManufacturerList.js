import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ManufacturerList = ({ manufacturers, deleteItem }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Manufacturer</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {manufacturers ? (
        manufacturers.map((manufacturer) => {
          return (
            <tr key={manufacturer.id}>
              <td>{manufacturer.name}</td>
              <td>
                <Link to={"/manufacturer/" + manufacturer.slug} className="btn btn-link">
                  Edit
                </Link>
              </td>
              <td>
                {/* <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteItem(manufacturer)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  </table>
);

ManufacturerList.propTypes = {
  manufacturers: PropTypes.array,
  deleteItem: PropTypes.func.isRequired,
};

export default ManufacturerList;
