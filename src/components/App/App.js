import React, { Component } from 'react';
import logo from './logo.svg';
import reduxLogo from './redux.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'; /* Added so that connect works */

// components
import SpeedControl from '../SpeedControl/SpeedControl';
import Passengers from '../Passengers/Passengers';
import Dashboard from '../Dashboard/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <img src={reduxLogo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React Redux</h1>
              {/* <button onClick={()=>{console.log(`Current redux is:`, this.props.reduxState)}}>Check Redux State</button> */}
              <nav>
                <ul>
                <li><Link to="/">Speed Control</Link></li>
                <li><Link to="/passengers">Passengers</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
              </nav>
            </header>

            <div className="content-container">
              <Route exact path="/" component={SpeedControl} />
            <Route path="/passengers" render={(props) => <Passengers {...props} dispatch={this.props.dispatch} />} />
              <Route path="/dashboard" component={Dashboard} />
            </div>

          </div>
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);
