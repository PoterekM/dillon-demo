import React, {Component} from 'react';
import Button from './Button'

export default class ButtonAreaComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <p>This is for the button area</p>
        <Button />
      </div>
    )
  }
}
