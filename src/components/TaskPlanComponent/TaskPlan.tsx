import { Stack, Typography } from "@mui/material"
import TaskPlan_newTask from "./TaskPlan_newTask/TaskPlan_newTask"



function TaskPlan({ taskList, onSubmitEdit, onDeleteTask, onCheckboxChanged}) {
    const plannedTasks = taskList.filter(task => task.isDone === false).length;
    
    return (
        <Stack mb={4} spacing = {1}>
            <Typography
            component = {'p'}
            variant = 'caption'
            gutterBottom = {false}
            align = {'center'}
            color='text.secondary'
            >{`ПЛАН (${plannedTasks})`}</Typography>

            {taskList.map(task => {
                if (task.isDone) {
                    
                } else {
                    return (
                        <TaskPlan_newTask 
                        key={crypto.randomUUID()} 
                        task = {task} 
                        onSubmitEdit = {onSubmitEdit}
                        onDeleteTask = {onDeleteTask}
                        onCheckboxChanged = {onCheckboxChanged}
                        />)
                }
            }
            )}
        </Stack>
    )
}

export default TaskPlan