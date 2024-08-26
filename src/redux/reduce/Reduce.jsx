import { add , filter,editTask } from "../const/Const";
const initialState={todo:[
    { description: "hello", title: "Title1" ,id:1,chekTsk:true},
    { description: "hi", title: "Title1",id:2,chekTsk:false},
    { description: "welcome", title: "Title1",id:3,chekTsk:false},
]}
export const todoReducer=(state=initialState,action)=>
    {
    switch(action.type)
    {
        case add : return {...state,todo:[...state.todo,action.payload]};
        case filter: return {...state,todo : [...state.todo.filter(res => res.chekTsk ==action.payload)] } ;
        case editTask :  return {...state,todo : [...state.todo.map((task )=> task.id == action.payload.id ? action.payload : task)]}
      
          
       
        default : return(state)
    }
    


}