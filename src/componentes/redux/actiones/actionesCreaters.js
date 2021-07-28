import {TASKSUBMIT, EDITTASK} from "./actionsType"

export  function taskSumbit() {
  return {
    type:TASKSUBMIT
  }
};


export  function editTask() {
  return {
    type:EDITTASK
  }

};
