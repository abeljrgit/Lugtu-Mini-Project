import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onDecrement, onIncrement } from '../../../services/action';

export default class Score extends Component {
  render() {
    return <section>This is score page!</section>;
  }
}
