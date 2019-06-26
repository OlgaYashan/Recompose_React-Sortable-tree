import React from 'react';
import Item from '../item'


import {
  
   ItemContainer
  } from './styled';


function DND(props) {
   return( <ItemContainer>
                    {props.items.map((item,index)=>(
                        <Item key={item.id} item={item} handleDrop={()=>props.deleteItemHandler(index,props.items)}/>
                    ))}
                </ItemContainer>)
                }

export default  DND;