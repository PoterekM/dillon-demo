import React, {Component} from 'react';
import DataSetActions from 'actions/dataset.actions'


export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <button onClick={DataSetActions.load}>Load the Dataset</button>
    )
  }
}
