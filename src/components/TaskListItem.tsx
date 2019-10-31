import React, { FunctionComponent } from "react";
import { Task } from "../models/task";

interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  return (
    <li>
      {task.name} <button onClick={() => onDelete(task)}>X</button>
    </li>
  );
};
