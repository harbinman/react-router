import { Stack } from "@mui/material";
import React, { useState } from "react";
import BasicDateTimePicker from "./BasicDateTimePicker";
import dayjs from "dayjs";
import { dateTimePickerTabsClasses } from "@mui/x-date-pickers";
import { Task } from "@mui/icons-material";

function AddTask() {
  const [TaskName, setTaskName] = useState(null);
  const [TaskTime, setTaskTime] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const Task = { TaskName, TaskTime };
    console.log(Task);
  };
  return (
    <Stack
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <form onSubmit={handleSubmit}>
        <label>Task name</label>
        <input
          type="text"
          value={TaskName}
          onChange={(e) => setTaskName(e.target.value)}
        ></input>
        <BasicDateTimePicker
          label="TaskTime"
          defaultValue={Date.now()}
          onChange={(newValue) => setTaskTime(newValue)}
        ></BasicDateTimePicker>

        <button type="submit">submit</button>
      </form>
    </Stack>
  );
}

export default AddTask;
