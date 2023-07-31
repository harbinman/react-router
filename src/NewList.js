import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useState, useEffect } from "react";
function NewList({ tasks, handleDelete, handleDetail }) {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1080,
        bgcolor: "background.paper",
        marginBottom: 5,
        marginTop: 5,
        height: "100%",
        overflow: "auto",
      }}
    >
      {tasks.map((task) => {
        const labelId = `checkbox-list-label-${task.id}`;

        return (
          <ListItem
            key={task.id}
            secondaryAction={
              <div>
                <IconButton
                  style={{ paddingRight: 24 }}
                  edge="end"
                  aria-label="Delete"
                  onClick={(e) => {
                    handleDelete(task.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  style={{ paddingRight: 24 }}
                  edge="end"
                  aria-label="Info"
                  onClick={(e) => {
                    handleDetail(task);
                  }}
                >
                  <InfoIcon />
                </IconButton>
              </div>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(task.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(task.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.task} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NewList;
