import { Container, Stack, Typography } from '@mui/material'

import './App.css'
import NewTaskInput from './components/TaskInput/TaskInput'
import TaskPlan from './components/TaskPlan/TaskPlan'

function App() {
  
  return (
    <Container sx={{mt: 4}} maxWidth = 'sm'>
      <Typography 
        fontSize = {34}
        fontWeight = {400} 
        color = {"primary.light"} 
        variant = 'body1'
        paddingBottom = {3}
      >TODO</Typography>
      <NewTaskInput></NewTaskInput>

      <Stack spacing = {2}>
        <Typography
          component = {'p'}
          variant = 'caption'
          gutterBottom = {false}
          align = {'center'}
          color = {'#00000099'}
        >{'ПЛАН (0)'}</Typography>

        <TaskPlan/>
      </Stack>
    </Container>
  )
}

export default App
