import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";

function App() {
  // state to store current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // cleanup interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-container">
      <h1 className="title">Color Clock ⏰</h1>

      <p className="time">
        {format(currentTime, "EEEE, MMMM do yyyy, h:mm:ss a")}
      </p>
    </div>
  );
}

export default App;