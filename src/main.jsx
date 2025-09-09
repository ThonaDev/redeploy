import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SingleJobCard from './components/card/jobs/single-job-card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SingleJobCard />
  </StrictMode>,
)
