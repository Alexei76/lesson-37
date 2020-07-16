import React from 'react';

export function TodoItem(props){
    return(
        <li className="todolist__item"><input type="checkbox" /> 
        <span className={props.item.status ? 'complete' : '' }>
            {props.item.text}</span></li>
    )

}