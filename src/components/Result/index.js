import React, {Component} from 'react';
import './index.scss';
import { DropTarget } from 'react-dnd';
import Item from '../item';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";

class Result extends Component{

    state = {
        items:[]
    }

    componentDidUpdate(prevState){
        if(prevState.data != this.props.data){
            this.changeState()
        }
    }

    changeState=()=>{
        this.setState({items:this.props.data})
    }

    render(){
        return(
            <div className="result_container">
                  {this.state.items.map((item,index)=>(
                        <p>{item.title}</p>
                    ))}
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(Result);