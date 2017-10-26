import React, {Component} from 'react';
import DataSetStore from 'stores/dataset.store'

export default class DataAreaComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataset:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    DataSetStore.listen(this.handleChange);
  }


  render() {
    return(
      <div>
        <p>this is for the data</p>
        <ul>
          {this.state.dataset.map((data, i) => {
            return <li key={`li-${i}`}>{i}) {data}</li>
          })}
        </ul>
      </div>
    )
  }

  handleChange(dataSetStore){
    this.setState({
      dataset: dataSetStore.dataset
    })
  }
}
