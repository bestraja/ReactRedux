import { add,editTask, filter} from "../const/Const"

export const AddTaskk=(el)=>
    {
        return {type:add,payload:el}
    }
    export const filterTask =(valInput)=>{

        return {type : filter , payload : valInput}
    }
    export const editTasks =(data)=>{
        return {type : editTask , payload : data}
      }