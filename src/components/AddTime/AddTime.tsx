import React, { useMemo } from 'react';
import moment from 'moment-timezone';
import Select, { OptionsType } from 'react-select';
import { Card } from '@components/Card';
import { useTimeZone } from '@controllers/timezones';
import './AddTime.css';

export const AddTime = () => {
  const { zones, addZone } = useTimeZone();

  const timezones: OptionsType<any> = useMemo(() => {
    return moment.tz
      .names()
      .filter((zone) => !zones.includes(zone))
      .map((zone) => {
        return {
          value: zone,
          label: zone.replaceAll('_', ' ').replaceAll('/', ' - '),
        };
      });
  }, [zones]);

  const addTimeZone = (e: any) => {
    addZone(e.value);
  };

  return (
    <Card>
      <div className="add-time">
        <p>Add Time Zone</p>
        <Select
          options={timezones}
          value={timezones[0]}
          onChange={addTimeZone}
          className="select"
        />
      </div>
    </Card>
  );
};
