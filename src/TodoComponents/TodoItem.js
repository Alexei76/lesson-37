import React from 'react';
import { Button } from '../uielements/Button';

export function TodoItem(props){
    return(
        <li className="todolist__item"><input type="checkbox" /> 
        <span className={props.item.status ? 'complete' : '' }>
            {props.item.text}</span>
            <Button>Remove</Button>
            </li>
    )

}