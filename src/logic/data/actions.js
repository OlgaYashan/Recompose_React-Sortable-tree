import { LOAD_DATA,CHANGE_DATA } from "./actionTypes";

export function loadData(obj) {
  return {
    type: LOAD_DATA,
    payload: { obj }
  };
}

export function changeResult (arr){
  return{
    type: CHANGE_DATA,
    payload: { arr }
  }
}

