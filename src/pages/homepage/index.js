import React, {Component} from 'react';
import Main from '../../components/mainComponent/index'
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';

class Homepage extends Component{

    render(){
        return(<div>
            <Main/>
        </div>)
    }
    

}

export default DragDropContext(HTML5Backend)(Homepage);