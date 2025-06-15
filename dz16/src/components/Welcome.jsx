import React from 'react'
import { Typography, Button, Container } from '@mui/material'

const Welcome = ({ onOpenDialog }) => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Добро пожаловать в наше приложение!
    </Typography>
    <Button variant="contained" onClick={onOpenDialog}>
      ОТКРЫТЬ ДИАЛОГОВОЕ ОКНО
    </Button>
  </Container>
)

export default Welcome
