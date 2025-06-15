import React, { useState } from 'react'
import { Container } from '@mui/material'
import Header from './Header'
import Welcome from './Welcome'
import DialogBox from './DialogBox'

function App() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <Header />
      <Container>
        <Welcome onOpenDialog={() => setDialogOpen(true)} />
        <DialogBox open={dialogOpen} onClose={() => setDialogOpen(false)} />
      </Container>
    </>
  )
}

export default App
