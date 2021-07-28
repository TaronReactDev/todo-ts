import React from "react";
import  DeleteIcon from "@material-ui/icons/Delete";
import  EditIcon from "@material-ui/icons/Edit";
import FlagIcon  from "@material-ui/icons/Flag";
import SaveIcon from '@material-ui/icons/Save';

import "./style.scss";

export default function Task({
  task,
  id,
  onFlag,
  onDelete,
  color,
  edit,
  editOrSaveTask,
  changeInputEdit,
  checked,
  checkedClick
}) {
  const editChange = (ev) => (id) => {
    changeInputEdit(ev, id);
  };


  return (
    <div className="oneTask">
      <div className="checkboxWithTask">
        <input type="checkbox"  onClick ={checkedClick(id)} />
        {edit ? (
          <input value={task} onChange={editChange(id)}></input>
        ) : (
          <p key={id} style={{ textDecorationLine : checked ?  'line-through' : 'none'}}>{task} </p>
        )}
      </div>

      {edit ? (

        <SaveIcon onClick={editOrSaveTask(id, "save")}/>
      ) : (
        <div className="icon">
            <EditIcon  onClick={editOrSaveTask(id)}/>{" "}
            <FlagIcon color={"" + color} onClick={onFlag(id)}/>{" "}
            <DeleteIcon  onClick={onDelete(id)}/>
        </div>
      )}
    </div>
  );
}
