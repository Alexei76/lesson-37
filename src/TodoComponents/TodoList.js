import React from "react";


export function TodoList(props){
if(!props.todos.length) return null
return (
<ul className="todolist" id="todolist">
  {
  props.todos.map((item) => {
  return (<li><input type="checkbox" /> <span className={item.status ? 'complete' : '' }>{item.text}</span></li>)}) }
  </ul>
)

}