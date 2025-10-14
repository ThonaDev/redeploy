import { useState } from "react";
import HomePage from "./pages/jobs/homepage";
import FindJob from "./pages/jobs/find-job-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <FindJob />
    </div>
  );
}

export default App;
