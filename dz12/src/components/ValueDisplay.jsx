import React, { useRef, useEffect, useState } from 'react'

const ValueDisplay = ({ value, onClear }) => {
  const previousSavedValueRef = useRef('')
  const [savedValue, setSavedValue] = useState('')
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  const handleSave = () => {
    previousSavedValueRef.current = displayValue
    setSavedValue(displayValue)
    onClear()
  }

  return (
    <div>
      <p>Current Value: {displayValue}</p>
      <p>Previous Value: {savedValue}</p>
      <button onClick={handleSave}>Save Value</button>
    </div>
  )
}

export default ValueDisplay
