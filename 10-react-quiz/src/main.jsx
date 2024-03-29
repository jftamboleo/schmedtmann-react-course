import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuestionsProvider } from './QuestionsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QuestionsProvider>
    <App />
  </QuestionsProvider>
)
