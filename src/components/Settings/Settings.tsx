import React from 'react';
import { useTimeZone } from '@controllers/timezones';
import { useSettings } from '@controllers/settings';
import './Settings.css';

export const Settings = () => {
  const { clearAll } = useTimeZone();
  const {
    showSeconds,
    setShowSeconds,
    show24Hours,
    setShow24Hours,
  } = useSettings();
  return (
    <div className="settings">
      <div className="icon">
        <i className="gg-options"></i>
      </div>
      <div className="dropdown">
        <div className="action" onClick={() => clearAll()}>
          Remove all
        </div>
        <div className="action" onClick={() => setShowSeconds()}>
          <input
            type="checkbox"
            checked={showSeconds}
            onChange={() => setShowSeconds()}
          />
          Show seconds
        </div>
        <div className="action" onClick={() => setShow24Hours()}>
          <input
            type="checkbox"
            checked={show24Hours}
            onChange={() => setShow24Hours()}
          />
          24-hours
        </div>
      </div>
    </div>
  );
};
