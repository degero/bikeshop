import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManufacturerList from "./ManufacturerList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as manufacturerActions from "../../redux/actions/manufacturerActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

export function ManufacturersPage(props) {
  const { manufacturers, actions } = props;
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (!manufacturers) {
      setErrors(null);
      actions.loadManufacturers().catch((error) => {
        setErrors({ loadError: "Error loading manufacturers: " + error });
      });
    }
  }, [props.manufacturers]);

  return (
    <>
      <h2>Manufacturers</h2>
      <Link to="/manufacturer">Add manufacturer</Link>
      <br />
      {!props.loading ? (
        <ManufacturerList manufacturers={manufacturers} deleteItem={actions.deleteManufacturer}></ManufacturerList >
      ) : (
        <Spinner />
      )
      }
      {errors ? (
        Object.getOwnPropertyNames(errors).map((v) => {
          return (<div className="col-12 col-md-4 alert alert-danger">
            {errors[v]}
          </div>);
        })) : (
        <></>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    manufacturers: state.manufacturers,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadManufacturers: bindActionCreators(manufacturerActions.loadManufacturers, dispatch),
      deleteManufacturer: bindActionCreators(manufacturerActions.deleteManufacturer, dispatch),
    },
  };
}

ManufacturersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  manufacturers: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManufacturersPage);
