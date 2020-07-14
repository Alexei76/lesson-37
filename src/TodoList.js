import React from "react";


export function TodoList(){
return(

 <ul className="todolist" id="todolist">
  {this.state.todos.length ? (
  this.state.todos.map((item) => {
  return (<li>
  <input type="checkbox" /> 
  <span className={item.status ? 'complete' : '' }>{item.text}</span>
  </li>)
  })
  ) : null}
  </ul>

)



}