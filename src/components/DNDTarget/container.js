import { loadData, changeResult} from "../../logic/data/actions";

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
    },
    changeResult(arr){
      dispatch(changeResult(arr))
    }
  };
}