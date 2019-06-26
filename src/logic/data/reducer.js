import defaultState from "../defaultState";
import {
  LOAD_DATA,
  CHANGE_DATA
} from "./actionTypes";

export default function dataReducer(state = defaultState.data, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        obj: action.payload.obj
      };
    }
    case CHANGE_DATA: {
      return {
        ...state,
        data: action.payload.arr
      };
    }

    default: 
    {
      return {
        ...state
      };
    }
  }
}
