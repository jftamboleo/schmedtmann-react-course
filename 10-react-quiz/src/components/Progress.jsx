import { useQuestions } from '../QuestionsContext'

export default function Progress () {
  const { points, maxPoints, index, numQuestions, answer } = useQuestions()
  return (
    <div className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      >
      </progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints} points
      </p>
    </div>
  )
}
