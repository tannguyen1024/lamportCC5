import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// global passenger list
let passengers = []

// put your reducer here!
const firstReducer = (state = { speed: 0, passengers }, action) => {
    if (action.type === `speedUp`) {
        return { ...state, speed: Number(state.speed) + 1 }
    }
    else if (action.type === `speedDown`) {
        if (state.speed === 0) { return state } /* This makes it so speed does not go below 0 */
        else {
            console.log(`Payload is`, action.payload)
            return { ...state, speed: state.speed - 1 }
        }
    }
    else if (action.type === `passenger`) {
        passengers.push(action.payload)
        console.log('All Passengers:',passengers)
        return { ...state, passengers: passengers }
    }
    return state;
}
// use reducer in store
const storeInstance = createStore(firstReducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
