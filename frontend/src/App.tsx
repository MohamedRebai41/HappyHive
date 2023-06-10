import { useState } from "react";

import "./App.css";
import Gift from "./components/Gift";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="w-200 h-200 bg-secondary"></div> */}
      <Gift />
    </>
  );
}

export default App;
