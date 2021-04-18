import React, { useState, useEffect } from 'react';
import moment, { Moment } from 'moment-timezone';
import { Card } from '@components/Card';
import { useTimeZone } from '@controllers/timezones';
import { useSettings } from '@controllers/settings';
import './Time.css';

interface TimeProps {
  zone?: string | null;
}

export const Time: React.FC<TimeProps> = ({ zone }) => {
  const [time, setTime] = useState<Moment | null>(null);
  const { removeZone } = useTimeZone();
  const { format } = useSettings();

  useEffect(() => {
    if (zone) {
      setTime(moment.tz(zone));
    }
  }, [zone]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (zone) {
        setTime(moment.tz(zone));
      }
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const remove = () => {
    if (zone) {
      removeZone(zone);
    }
  };

  return (
    <Card>
      <div className="remove" onClick={remove}>
        <i className="gg-close"></i>
      </div>
      {zone && <div className="time-title">{zone}</div>}
      {time && <div className="time">{time.format(format)}</div>}
      {time && <div className="date">{time.format('MMMM Do YYYY')}</div>}
    </Card>
  );
};
