import { useQuestions } from '../QuestionsContext'

export default function NextButton () {
  const { nextQuestion, answer, index, numQuestions, finishQuiz } = useQuestions()

  const isLastQuestion = index === numQuestions - 1
  if (answer === null) return null
  return (
    <button
      className='btn btn-ui'
      onClick={isLastQuestion ? finishQuiz : nextQuestion}
    >
      {isLastQuestion ? 'Finish' : 'Next'}
    </button>
  )
}
