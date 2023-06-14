import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BikeList from "./BikeList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as bikeActions from "../../redux/actions/bikeActions";
import * as manufacturerActions from "../../redux/actions/manufacturerActions";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

export function BikesPage(props) {
  const { bikes, actions, manufacturers } = props;

  useEffect(() => {
    if (!bikes) {
      const runTask = async () => {
        actions.loadBikes().catch((error) => {
          alert("Error loading bikes: " + error);
        });
      };
      runTask();
    }
    if (!manufacturers) {
      const runTask2 = async () => {
        actions.loadManufacturers().catch((error) => {
          alert("Error loading manufacturers: " + error);
        });
      };
      runTask2();
    }
  }, [props.bikes, props.manufacturers]);


  return (
    <>
      <h2>Bikes</h2>
      <Link to="/bike">Add bike</Link>
      <br />
      {!props.loading ? (
        <BikeList bikes={bikes} manufacturers={manufacturers} deleteItem={actions.deleteBike}></BikeList>
      ) : (
        <Spinner />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    bikes: state.bikes,
    manufacturers: state.manufacturers,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBikes: bindActionCreators(bikeActions.loadBikes, dispatch),
      loadManufacturers: bindActionCreators(manufacturerActions.loadManufacturers, dispatch),
      deleteBike: bindActionCreators(bikeActions.deleteBike, dispatch),
    },
  };
}

BikesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bikes: PropTypes.array,
  manufacturers: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikesPage);
