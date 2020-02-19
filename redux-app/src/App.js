import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import {addQuote} from './actions/mainActions'

function App(props) {
  return (
    <div className="App">
        <h1>API</h1>
      
    </div>
  );
}


const mapStateToProps = state => {
  return {
    quote: state.addQuote
  }
}

export default connect(mapStateToProps, {addQuote})(App)