import React, { useState } from 'react';
import { Task } from './models/task';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';

interface State {
  newTask: Task;
  tasks: Task[];
};

const App: React.FunctionComponent<{}> = () => {
  const initialState: State = {
    newTask: {
      id: 1,
      name: "",
    },
    tasks: [],
  };
  const [newTask, setNewtask] = useState(initialState.newTask);
  const [tasks, setTasks] = useState(initialState.tasks);

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewtask({
      id: newTask.id + 1,
      name: ""
    });
    setTasks([ ...tasks, newTask ]);
  };
  
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewtask({
      ...newTask,
      name: event.target.value,
    });
  };

  const deleteTask = (taskToDelete: Task) => {
    setTasks([...tasks.filter(task => task.id !== taskToDelete.id)]);
  };
  
  return (
    <div>
      <h2>Hello React TS!</h2>
      <NewTaskForm
        task={newTask}
        onAdd={addTask}
        onChange={handleTaskChange}
      />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
