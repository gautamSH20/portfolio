import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  const [black, setBlak] = useState(false);
  return (
    <div className="">
      <button
        className="sticky top-0 left-1/2 right-1/2"
        onClick={() => {
          setBlak((e) => !e);
        }}
      >
        clickMe
      </button>
      <Home val={black} />
    </div>
  );
}

export default App;
