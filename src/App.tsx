import React, { useState, useEffect } from 'react';
import { AppBar, Timez } from '@components/index';
import { TimeZone } from '@controllers/timezones';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <TimeZone>
        <AppBar />
        <Timez />
      </TimeZone>
    </div>
  );
}

export default App;
