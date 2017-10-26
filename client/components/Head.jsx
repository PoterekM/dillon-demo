import React from 'react';
import ButtonAreaComponent from './ButtonAreaComponent'
import DataAreaComponent from './DataAreaComponent'

export default class Head extends React.Component {
    constructor (props) {
      super(props);
    }

    render() {
      return (
        <div>
          <p>Hello World</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <ButtonAreaComponent />
            <DataAreaComponent />
          </div>
        </div>
      );
    }
}
