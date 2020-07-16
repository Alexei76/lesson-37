import React from "react";


export function TodoList(props){
return (
<ul className="todolist" id="todolist">
  {props.todos.length ? (
  props.todos.map((item) => {
  return (<li><input type="checkbox" /> <span className={item.status ? 'complete' : '' }>{item.text}</span></li>)})) : null }
  </ul>
)

}