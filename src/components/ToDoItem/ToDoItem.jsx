import React from 'react';
import s from "./ToDoItem.module.sass"
import Button from '../UI/Button/Button' 

export default function ToDoItem({id, title, description, deleteTodo}) {     

    return (<div className={s.item} onDoubleClick={()=>deleteTodo(id)}>
    <p>
        Номер: {id}
    </p>
    <p>
        Наименование: {title}
    </p>
    <p>
        Описание: {description}
    </p>
     
    <Button style={{width: "20px", height: "20px"}} onClick={()=>deleteTodo(id)}>x</Button>
    </div>)
};

 
