import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterBtn({ filterChange, filterValueChange }) {
  const classes = useStyles();

  return (
    <div className="filterBy">

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterChange}
          onChange={filterValueChange}
        >
          <MenuItem value="important"> important </MenuItem>
          <MenuItem value="not important">not important </MenuItem>
          <MenuItem value="checked"> checked </MenuItem>
          <MenuItem value="not checked"> not checked </MenuItem>
          <MenuItem value=""> all </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
