import { useQuestions } from '../QuestionsContext'

export default function StartQuestions () {
  const { numQuestions, startQuiz } = useQuestions()

  return (
    <div className='start'>
      <h2>The React Quiz</h2>
      <h3>{numQuestions} questions</h3>
      <button
        className='btn btn-ui'
        onClick={startQuiz}>
          Start
      </button>
    </div>
  )
}
