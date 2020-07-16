import React from 'react';
import { Button } from '../uielements/Button';
import { TodoListItem } from '../uielements/TodoListItem';

export function TodoItem(props){
    return(
        <TodoListItem><input type="checkbox" /> 
        <span className={props.item.status ? 'complete' : '' }>
            {props.item.text}</span>
            <Button>Remove</Button>
            </TodoListItem>
    )

}