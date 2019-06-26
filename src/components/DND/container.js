import { loadData} from "../../logic/data/actions";
import {connect}from 'react-redux';

export function mapStateToProps(state) {
  const { obj } = state.data;

  return {
    obj

  };
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData(obj) {
      dispatch(loadData(obj));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)