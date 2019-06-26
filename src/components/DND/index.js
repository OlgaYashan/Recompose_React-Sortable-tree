import React, {Component} from 'react';
import { loadData} from "../../logic/data/actions";
import {connect}from 'react-redux';




import {
    compose,
    withStateHandlers,
    withHandlers,
    withReducer,
    withState, getContext, lifecycle
  } from 'recompose';

import DND from './dnd'

const mapStateToProps = state =>({
     obj: state.data
  })

const myHandlers = withHandlers(
    {
        deleteItemHandler: ({dispatch})=>(id,items)=>{
            var unic = Math.ceil(Math.random() * Math.floor(1000));
            items[id].unicId= unic;
            dispatch(loadData(items[id]))}
            
    },
)

const myLifecycles = lifecycle({
    componentDidUpdate() { console.log(this.props.obj) }
    
  }) 

const myStateHendlers = withStateHandlers(
    () => ({
        items:  [
            {id: 1, title: 'Item 1', unicId:0},
            {id: 2, title: 'Item 2', unicId:0},
            {id: 3, title: 'Item 3', unicId:0},
            {id: 4, title: 'Item 4', unicId:0}
        ]
      }),
    

)
  



    export default compose(
    connect(mapStateToProps),
    myStateHendlers,
    myHandlers,
    myLifecycles
    )(DND);




 