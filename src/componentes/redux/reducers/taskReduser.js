import {TASKSUBMIT, EDITTASK} from "../actiones/actionsType"

const initialState ={
task:"",
}

export default function (state= initialState, action){
  switch (action.type){
    case TASKSUBMIT:
      return {task:"sdf"}

    case EDITTASK:
      return {task:"sxsxfsdf"}
    default: return state
  }

}
