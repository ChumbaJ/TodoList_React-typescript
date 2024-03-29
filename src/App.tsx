import './App.css'
import { Container, Typography } from '@mui/material'
import NewTaskInput from './components/TaskInput/TaskInput'
import TaskPlan from './components/TaskPlanComponent/TaskPlan'
import TaskDone from './components/TaskDone/TaskDone'
import { FormEvent, useEffect, useState } from 'react'

interface Itask {
  taskName: string
  isEdit: boolean
  isDone: boolean
  toDelete: boolean
}

type TaskListType = Array<Itask> | [];



function App() {

  useEffect(() => {
    const input = document.getElementById("newTaskInput") as HTMLInputElement;
    document.addEventListener('keydown', (e) => {
      if (e.key != 'Escape') {
        input.focus();
      } else {
        input.blur();
      }
  })
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key != 'Escape') {
          input.focus();
        } else {
          input.blur();
        }
      });  
    }
},[])

  const [taskList, setTaskList] = useState<TaskListType>([]); 

  const addNewTask = (e: FormEvent, task: string) => { 
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        taskName: task,
        isEdit: false,
        isDone: false,
        toDelete: false
      }
    ])
  }

  const submitEditTask = (e: FormEvent, taskToEdit: Itask) => {
    e.preventDefault();
    taskToEdit.isEdit = !taskToEdit.isEdit; 
    setTaskList([...taskList])
  }

  const onDeleteTask = (task: Itask) => {
    task.toDelete = true;
    setTaskList(taskList.filter(taskObj => taskObj.toDelete != true));
  }

  const onCheckboxChanged = (task: Itask) => {
    task.isDone = !task.isDone;  
    setTaskList([...taskList])
  }

  return (
    <Container disableGutters={true} sx={{mt: 4, mb:4 , minHeight: 600, p:8, borderRadius: 4, boxShadow: 4}} maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight = {400} 
        color = {"primary.light"} 
        variant = 'body1'
        marginBottom = {3}
      >TODO</Typography>

      <NewTaskInput addNewTask = {addNewTask}></NewTaskInput>
      <TaskPlan 
        taskList = {taskList} 
        onDeleteTask = {onDeleteTask} 
        onSubmitEdit = {submitEditTask}
        onCheckboxChanged = {onCheckboxChanged}
      />
      <TaskDone 
        onDeleteTask = {onDeleteTask} 
        taskList = {taskList} 
        onCheckboxChanged = {onCheckboxChanged}
      />
    </Container>
  )
}

export default App
