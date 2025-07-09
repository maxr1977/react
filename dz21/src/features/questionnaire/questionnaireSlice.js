import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Question 1?',
      options: ['Option 1', 'Option 2'],
      answer: 'Option 1',
      userAnswer: null,
    },
    {
      id: 2,
      text: 'Question 2?',
      options: ['Option 1', 'Option 2'],
      answer: 'Option 2',
      userAnswer: null,
    },
    {
      id: 3,
      text: 'Question 3?',
      options: ['Option 1', 'Option 2'],
      answer: 'Option 1',
      userAnswer: null,
    },
    {
      id: 4,
      text: 'Question 4?',
      options: ['Option 1', 'Option 2'],
      answer: 'Option 1',
      userAnswer: null,
    },
    {
      id: 5,
      text: 'Question 5?',
      options: ['Option 1', 'Option 2'],
      answer: 'Option 2',
      userAnswer: null,
    },
  ],
  score: null,
}

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, answer } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      if (question) {
        question.userAnswer = answer
      }
    },

    submitQuiz: (state) => {
      let correctAnswers = 0
      state.questions.forEach((q) => {
        if (q.answer === q.userAnswer) {
          correctAnswers++
        }
      })
      state.score = correctAnswers
    },
  },
})

export const { answerQuestion, submitQuiz } = questionnaireSlice.actions

export default questionnaireSlice.reducer
