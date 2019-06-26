import React, {Component} from 'react';
import './index.scss';
import { DropTarget } from 'react-dnd';
import Item from '../item';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
//import SortableTree from "../sortableTree";
import {SortableTreeWithoutDndContext as SortableTree} from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

class DNDTarget extends Component{

    state = {
        items:[]
    }
    
    componentDidUpdate(prevProps){
        if(prevProps.obj.unicId != this.props.obj.unicId && this.props.obj.unicId != 0){
         
            this.itemsAddObj();
          
          
            
        }
    
      
    }

    clear=()=>{
        this.props.loadData( {
          unicId:0
        });
    }

    itemsAddObj=()=>{
        this.state.items.unshift(this.props.obj);
       
       this.add();
        

    }

    add=()=>{
      this.handleTreeOnChange([...this.state.items])
      this.clear();
    }

 
    handleTreeOnChange = treeData => {
        this.setState({ items: treeData });
        this.props.changeResult(treeData);
             
      };
    

    render(){
        const {connectDropTarget, hovered} = this.props;
        const backgroundColor = hovered ? 'lightgreen' : 'white';
        return connectDropTarget(
            <div className="target" style={{backgroundColor}}>
                 <div className="target_item_container">
                    <SortableTree 
                        treeData={this.state.items}
                        onChange={this.handleTreeOnChange}
                        maxDepth={1}
                    />
                </div>
            </div>
        )
    }
}

export default DropTarget('item',{}, collect)(connect(
    mapStateToProps,
  mapDispatchToProps
)(DNDTarget));