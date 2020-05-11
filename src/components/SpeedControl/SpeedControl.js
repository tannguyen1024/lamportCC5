import React, { Component } from 'react';
import { connect } from 'react-redux' /* Added so that connect works */
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  handleClick = (event, property) => {
    console.log('Property:', property)
    if (property === `speedUp`) {
      this.props.dispatch({ type: `speedUp`, payload: 1 })
    }
    else if (property === `speedDown`) {
      this.props.dispatch({ type: `speedDown`, payload: 1 });
    }
  }

  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={(event) => this.handleClick(event, `speedUp`)}>Increase Speed</button>
        <p>{JSON.stringify(this.props.reduxState)}</p>
        <button onClick={(event) => this.handleClick(event, `speedDown`)}>Decrease Speed</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(SpeedControl);
