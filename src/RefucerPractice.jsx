import React from 'react'
import { useState,useReducer } from 'react'
import './Reducer.css'

export const ACTIONS={
    ADD_TODO: 'add-todo',
    TOGGLE_TODO : 'toggle-todo',
    DELETE_TODO:'delete-todo'
  }





export default function RefucerPractice() {

    const[todos,dispatch] = useReducer(reducer,[])
    const[name,setName] = useState('')


 
      
      function reducer(todos,action){
        switch (action.type){
          case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.name)]
          case ACTIONS.TOGGLE_TODO:
            return todos.map(todo=>{
              if(todo.id === action.payload.id){
                return {...todo, complete: !todo.complete}
              }
              return todo
            })
          case ACTIONS.DELETE_TODO:
            return todos.filter(todo=> todo.id !== action.payload.id)
          default:
              return todos
            }
        }
        
      
        function newTodo(name){
          return {id: Date.now(), name:name, complete:false}
        }
   
  function handleSubmit(e){
    e.preventDefault()
    dispatch({ type:ACTIONS.ADD_TODO, payload:{name:name}})
    setName('')
  }


  console.log(todos);


  return (
    <div className='body'>
      <h1>To-do list / practice reducer</h1>
        <form onSubmit={handleSubmit} className="form"> 
          <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        </form>
        <div className='newGen'>
        {todos.map(todo=>{
            return <div key={todo.id}>
                <span style={{color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
                     
                </span>
            <button onClick={()=> dispatch({type: ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}>Toggle </button>
            <button onClick={()=> dispatch({type: ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>Delete</button>
            <br/>
            <br/>
            
            </div> 
        })}</div>
    </div>
      
     
  )
}
