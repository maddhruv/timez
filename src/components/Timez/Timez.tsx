import React from 'react';
import { Time } from '@components/Time';
import { AddTime } from '@components/AddTime';
import { useTimeZone } from '@controllers/timezones';
import './Timez.css';

export const Timez = () => {
  const { zones } = useTimeZone();

  return (
    <div className="timez">
      {!!zones.length && zones.map((zone) => <Time zone={zone} key={zone} />)}
      <AddTime />
    </div>
  );
};
