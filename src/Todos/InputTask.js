import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {TextField} from "@material-ui/core/";



const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

export default function InputTask({value, handleChange, submit}) {
    const classes = useStyles();
    return (
        <form
        className={classes.root}
        onSubmit={submit}
        noValidate
        autoComplete="off"
      >
          <TextField
            id="standard-multiline-flexible"
            label="enter your task"
            rowsMax={4}
            value={value}
            onChange={handleChange}
          />
      </form>
    )
}
