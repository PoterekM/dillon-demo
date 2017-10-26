import Alt from '../alt';
import DataSetActions from '../actions/dataset.actions';

class DataSetStore {
  constructor() {
    this.state = {};

    this.bindActions(DataSetActions);
  }

  onLoad(dataset) {
    this.setState({
      dataset: dataset
    })
  }

}

export default Alt.createStore(DataSetStore);
