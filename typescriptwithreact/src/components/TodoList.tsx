import React from 'react'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setcompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>
  }

const TodoList:React.FC<Props> = ({todos,setTodos,completedTodos,setcompletedTodos}) => {
  return (
    <div>
    <Droppable droppableId='TodosList'>
      {(provided,snapshot)=>(
        <div className={snapshot.isDraggingOver?"dragactive":""} ref={provided.innerRef} {...provided.droppableProps}>
        <span>Active tasks</span>
        {todos.map((todo,index)=>(<SingleTodo index={index} todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>))}
        {provided.placeholder}
      </div>
      )}
      </Droppable>
      
      <Droppable droppableId='TodosRemove'>
        {(provided,snapshot)=>(
          <div   className={snapshot.isDraggingOver?"dragcomplete":""} ref={provided.innerRef} {...provided.droppableProps}>
            <span>Completed tasks</span>
            {completedTodos.map((todo,index)=>(<SingleTodo todo={todo} todos={completedTodos} key={todo.id} setTodos={setcompletedTodos} index={index}/>))}
            {provided.placeholder}
          </div>
        )}
        
      </Droppable>
      </div>
      
      
    
    
    
  )
}

export default TodoList
