import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PresOut from './Presout';

class ContOut extends Component {

  render(){
    return (
      <div>
        <PresOut />
      </div>
    )
  }
}

export default ContOut;