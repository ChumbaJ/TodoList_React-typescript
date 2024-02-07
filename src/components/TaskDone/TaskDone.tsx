import { Box, Checkbox, IconButton, Stack, FormControlLabel, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

function TaskDone({ taskList, onCheckboxChanged }) {
    const doneTasks = taskList.filter(task => task.isDone);

    return (
        <Stack spacing={2}>
            <Typography 
            align="center" 
            variant="caption" 
            gutterBottom={false} 
            color='text.secondary'
            >{`ГОТОВО (${doneTasks.length})`}</Typography>


            {doneTasks.map(task => 
                <Stack key={crypto.randomUUID()} direction='row' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <FormControlLabel control={<Checkbox onChange={() => onCheckboxChanged(task)} defaultChecked={true}/>} label={task.taskName}/>
                    </Box>
                    <IconButton sx={{pr:0.4}}>
                        <DeleteIcon color="warning"/>
                    </IconButton>
                </Stack>
            )}
            
        </Stack>
    )
}

export default TaskDone