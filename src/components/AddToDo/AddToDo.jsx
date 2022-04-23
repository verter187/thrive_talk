import React from 'react';
import s from './AddToDo.module.sass'
import Button from '../UI/Button/Button' 
import Input from '../UI/Input/Input' 

export default function AddToDo({addToDo}) {      
    const submit = e => {
         e.preventDefault();
         const {title, description} = e.target;
         addToDo(Date.now() %100000, title.value, description.value);
         title.value = '';
         description.value = '';
      }    
      
      return (
      <form className={s.form} onSubmit={submit}>
      <label className={s.field}>
          <p>Название</p>
          <Input></Input>           
      </label>
  
      <label className={s.field}>
          <p>Описание</p>
          <textarea name="description" type="text"> </textarea>      
      </label>         
          <Button>Добавить</Button>
      </form>
     );
};

 
