import React, {Component} from 'react';
import './index.scss';
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props){
        console.log('dragging');
        return props.item;
    },
    endDrag(props, monitor, component){
        if(!monitor.didDrop()){
            return;
        }
        return props.handleDrop(props.item.id);
    }
}

function collect(connect,monitor){
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreeview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

class Item extends Component{

    render(){
        const {isDragging, connectDragSource, item} = this.props;
        const opacity = isDragging ? 0 : 1;
        // return(
        //     <div className="item">
        //         {this.props.item.name}
        //     </div>
        // )
        return connectDragSource(
            <div className="item" style={{opacity}}>
                <span>{item.title}</span>
            </div>
        )
    }
}
export default DragSource('item',itemSource,collect)(Item);