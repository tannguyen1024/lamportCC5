import React, { Component } from 'react';
import { connect } from 'react-redux'; /* Added so that connect works */
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = { passenger: '' }

  handleChange = (event) => {
    console.log(`Passenger is:`, event.target.value)
    this.setState({ passenger: event.target.value })
  }

  handleClick = () => {
    console.log(this.state)
    this.props.dispatch({type: `passenger`, payload: this.state.passenger})
  }

  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Passenger</button>

        <ul>PASSENGER LIST:
          {this.props.reduxState.passengers.map((passengers) => {
            return (
              <li>{passengers}</li>
            )
          })}
        </ul>
        
      
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(Passengers);
