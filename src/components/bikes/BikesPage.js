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
    if (bikes.length === 0) {
      actions.loadBikes().catch((error) => {
        alert("Error loading bikes: " + error);
      });
    }
  }, [props.bikes]);

  return (
    <>
      <h1>Bikes</h1>
      <Link to="/bike">Add bike</Link>
      {!props.loading ? <BikeList bikes={bikes}></BikeList> : <></>}
    </>
  );
}

function mapStateToProps(state) {
  debugger;
  return {
    bikes: state.bikes,
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBikes: bindActionCreators(bikeActions.loadBikes, dispatch),
      // todo add crud actions    },
    },
  };
}

BikesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  bikes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BikesPage);
