import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styled from '@emotion/styled'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    primary: {
      main: '#1976d2',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#90caf9',
    },
  },
})

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  padding: '10px 20px',
  borderRadius: '8px',
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.getContrastText(theme.palette.primary.main),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  const currentTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1">
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography>

        <StyledButton onClick={handleThemeToggle}>Toggle Theme</StyledButton>
      </div>
    </ThemeProvider>
  )
}

export default App
