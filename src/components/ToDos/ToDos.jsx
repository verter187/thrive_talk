import React, {useState} from 'react';
import ToDoList from '../ToDoList'
import AddToDo from '../AddToDo'
import s from "./ToDos.module.sass"
 

export default function ToDos() {
    const [todo, setTodo] = useState([

        {id:1, title:'бег', description: 'очень люблю!'},  
        {id:2, title:'лыжи', description: 'катаюсь редко!'} ,
        {id:3, title:'велосипед', description: 'катаюсь часто!'}  
    ]);

    const addToDo = (id, title, description) => {       
        setTodo(prev => [...todo, {id, title, description}]);
    }

    const deleteTodo = id => {
        setTodo(prev => todo.filter(t => t.id !== id));
    }

    return (
        <div className={s.todos}>
            <h1>Дела на сегодня</h1>
            <p>Терпение и труд все, я устал</p>
            <AddToDo addToDo={addToDo}/>
            <ToDoList todo={todo} deleteTodo={deleteTodo}/>            
        </div>
    )
};