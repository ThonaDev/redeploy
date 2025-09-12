import { useState } from 'react'
import JobTester from './pages/jobs/JobTester'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>RTK Query Test</h1>
      <JobTester />
    </>
  )
}

export default App
