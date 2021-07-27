import React, { useState, useEffect } from "react";
import Task from "./Task";
import ListAltIcon from "@material-ui/icons/ListAlt";
import FilterBtn from "./FilterBtn";
import InputTask from "./InputTask";
import "./style.scss";

export default function Index() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filterChange, setFilterChange] = useState("");
  const [important, setImportant] = useState([]);
  const [notImportant, setNotImportant] = useState([]);

  useEffect(() => {
    const importantTask = tasks.filter((elem) => {
      return elem.task.color === "secondary";
    });




    setImportant([...importantTask]);
    const notImportantTask = tasks.filter((elem) => {
      return elem.task.color === "";
    });




    setNotImportant([...notImportantTask]);
  }, [tasks]);

  const handleChange = (ev) => {
    setValue(ev.target.value);
  };
  const submit = (ev) => {

    ev.preventDefault();
      const task = {
      id: new Date(),
      task: value,
      color: "",
      edit: false,
      checked: false,
    };
    value && setTasks([...tasks,  {task} ]);
    setValue("");
  };

  const filterValueChange = (ev) => {
    setFilterChange(ev.target.value);
  };

  const onDelet = (id) => () => {
    const deletArr = tasks.filter((el) => {
      return el.task.id !== id;
    });

    setTasks([...deletArr]);
  };

  const onFlag = (id) => () => {
    tasks.filter((el) => {
      if (el.task.id === id) {
        el.task.color === ""
          ? (el.task.color = "secondary")
          : (el.task.color = "");
      }
    });

    setTasks([...tasks]);
  };

  const editOrSaveTask = (id, type) => () => {
    tasks.find((el) => {
      return el.task.id === id;
    }).task.edit = type === "save" ? false:true;

    setTasks([...tasks]);
  };


  const changeInputEdit = (id, ev) => {
    tasks.find((el) => {
      return el.task.id === id;
    }).task.task = ev.target.value;
    setTasks([...tasks]);
  };


  const checkedClick =(id)=>()=>{
    tasks.filter((el) => {
if(el.task.id === id){
  el.task.checked === false ? el.task.checked=true : el.task.checked = false;
}
return el;
    });
    setTasks([...tasks]);
  }

  const todo = (tasks) => {
    return tasks.map((el) => {
      return (
        <Task
          id={el.task.id}
          task={el.task.task}
          onDelet={onDelet}
          onFlag={onFlag}
          color={el.task.color}
          edit={el.task.edit}
          editOrSaveTask={editOrSaveTask}
          changeInputEdit={changeInputEdit}
          checked ={el.task.checked}
          checkedClick={checkedClick}
        />
      );
    });
  };

  return (
    <div className="todoMainDiv">
      <div className="navbar">
        <ListAltIcon />
        <p>Add task</p>
      </div>

      <FilterBtn
        filterValueChange={filterValueChange}
        filterChange={filterChange}
      />
      <InputTask value={value} handleChange={handleChange} submit={submit} />

      {filterChange === ""
        ? todo(tasks)
        : filterChange === "important"
        ? todo(important)
        : todo(notImportant)}
    </div>
  );
}
