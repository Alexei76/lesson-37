import React from 'react';

export function TodoItem(props){
    return(
        <li><input type="checkbox" /> <span className={props.item.status ? 'complete' : '' }>{props.item.text}</span></li>
    )

}