import Task from './Task'

const Tasks = ({ tasks, onDelete, onReminder }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          task={task} 
          onDelete={onDelete} 
          onReminder={onReminder}
        />
      ))}
    </>
  );
}

export default Tasks
