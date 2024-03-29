import { useEffect } from 'react'
import { useQuestions } from '../QuestionsContext'

export default function Timer () {
  const { secondsRemaining, tick } = useQuestions()

  const minutes = Math.floor(secondsRemaining / 60)
  const seconds = secondsRemaining % 60
  useEffect(() => {
    const intervalId = setInterval(() => {
      tick()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <p className='timer'>{minutes < 10 && '0'}{minutes}:{seconds < 10 && '0'}{seconds}</p>
  )
}
