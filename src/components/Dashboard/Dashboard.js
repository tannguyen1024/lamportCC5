import React, { Component } from 'react';
import { connect } from 'react-redux' /* Added so that connect works */

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {this.props.reduxState.speed}</p>
        <p>PASSENGER COUNT: {this.props.reduxState.passengers.length}</p>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Dashboard);