import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {addQuote} from './actions/mainActions'

function App(props) {
  return (
    <div className="App">
      <div className="tweet">
        <h1>Kanye West Tweets</h1>
      <p>{props.quote}</p>
      <button onClick={props.addQuote}>Generate Tweet</button>
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    quote: state.quote,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {addQuote})(App)