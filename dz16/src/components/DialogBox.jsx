import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

const DialogBox = ({ open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Использовать Material UI?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Вы согласны использовать компоненты Material UI в своём проекте?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>ОТМЕНА</Button>
      <Button onClick={onClose} autoFocus>
        СОГЛАСЕН
      </Button>
    </DialogActions>
  </Dialog>
)

export default DialogBox
