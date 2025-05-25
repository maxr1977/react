// src/components/DynamicForm.jsx
import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/DynamicForm.module.css'

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2))
  }

  const firstFieldValue = watch('firstField', '')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label className={styles.label}>First Field</label>
      <input
        className={styles.input}
        {...register('firstField', {
          required: 'This field is required',
          minLength: {
            value: 6,
            message: 'Minimum 6 characters required',
          },
        })}
      />
      {errors.firstField && (
        <p className={styles.error}>{errors.firstField.message}</p>
      )}

      {firstFieldValue.length >= 6 && (
        <>
          <label className={styles.label}>Second Field</label>
          <input
            className={styles.input}
            {...register('secondField', {
              required: 'Second field is required',
            })}
          />
          {errors.secondField && (
            <p className={styles.error}>{errors.secondField.message}</p>
          )}
        </>
      )}

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  )
}

export default DynamicForm
