import Alt from '../alt';
import request from 'superagent';



class DataSetActions {
  load() {
    const route = '/api/dataset';

    return (dispatch) => {
      request
        .get(route)
        .query({})
        .end((err, res) => {
          if(err) return console.error(err);

          dispatch(JSON.parse(res.text).dataset);
        })
    }
  }
}

export default Alt.createActions(DataSetActions);
