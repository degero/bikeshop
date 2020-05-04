import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BikeList from "./BikeList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as bikeActions from "../../redux/actions/bikeActions";
import PropTypes from "prop-types";

export function BikesPage(props) {
  const { bikes, actions } = props;

  useEffect(() => {
    if (!bikes) {
      actions.loadBikes().catch((error) => {
        alert("Error loading bikes: " + error);
      });
    }
  }, [props.bikes]);

  return (
    <>
      <h1>Bikes</h1>
      <Link to="/bike">Add bike</Link>
      {!props.loading ? (
        <BikeList bikes={bikes} deleteItem={actions.deleteBike}></BikeList>
      ) : (
        <></>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    bikes: state.bikes,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBikes: bindActionCreators(bikeActions.loadBikes, dispatch),
      deleteBike: bindActionCreators(bikeActions.deleteBike, dispatch),
    },
  };
}

BikesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bikes: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikesPage);
