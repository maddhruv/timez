import React from 'react';
import { AppBar, Timez } from '@components/index';
import { TimeZone, SettingsProvider } from '@controllers/index';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      <SettingsProvider>
        <TimeZone>
          <AppBar />
          <Timez />
        </TimeZone>
      </SettingsProvider>
    </div>
  );
}

export default App;
