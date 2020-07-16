import React from 'react';
import { TodoItem } from './TodoItem';


export function TodoList(props){
if(!props.todos.length) return null
return (
<ul className="todolist" id="todolist">
  {
  props.todos.map((item) => {
  return (<TodoItem key = { item.id } item={item}/>)
  }) 
  }
  </ul>
)

}