import { useState, useEffect } from "react";
import NewList from "./NewList";
import SimpleBackdrop from "./SimpleBackdrop";

export default function CheckboxList() {
  const [state, setState] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [open, setOpen] = useState(true);
  const [err, setErr] = useState(null);
  const handleDelete = (id) => {
    console.log("delete");
    const deleteResult = tasks.filter((task) => {
      return task.id !== id;
    });
    console.log(deleteResult);
    setTasks(deleteResult);
    setState(false);
  };
  const handleDetail = (task) => {
    console.log("detail");
    console.log(task);
  };
  useEffect(() => {
    fetch("http://localhost:4040/tasks")
      .then((res) => {
        if (!res.ok) {
          console.log("connection is suck!!!");
        }
        //console.log(res.json());
        return res.json();
      })
      .then((PromiseResult) => {
        const result = PromiseResult;
        setIspending(false);
        setTasks(result);
        setState(true);
        setOpen(false);
        console.log(tasks);
      })
      .catch((err) => {
        setOpen(false);
        setErr(err.message);
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {isPending && (
        <div>
          <SimpleBackdrop open={open} />
        </div>
      )}
      {err && (
        <div>
          <p>{err}</p>
        </div>
      )}

      {tasks && (
        <NewList
          tasks={tasks}
          handleDelete={handleDelete}
          handleDetail={handleDetail}
        />
      )}
    </div>
  );
}
