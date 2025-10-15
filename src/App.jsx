import { useState } from "react";
import Homepage from "./pages/jobs/homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
