import React, { createContext, useContext, useEffect, useState } from 'react';
import moment from 'moment-timezone';

interface TimeZoneContextProps {
  zones: string[];
  addZone: (zone: string) => void;
  removeZone: (zone: string) => void;
  clearAll: () => void;
}

const TimeZoneContext = createContext<TimeZoneContextProps>({
  zones: [],
  addZone: () => {},
  removeZone: () => {},
  clearAll: () => {},
});

export const TimeZone: React.FC = ({ children }) => {
  const [zones, setZones] = useState<string[]>(() => {
    const storedZones = window.localStorage.getItem('zones');

    return storedZones ? JSON.parse(storedZones).zones : [moment.tz.guess()];
  });

  useEffect(() => {
    window.localStorage.setItem('zones', JSON.stringify({ zones }));
  }, [zones]);

  const addZone = (zone: string) => {
    if (zone) {
      setZones((prevZones) => [...prevZones, zone]);
    }
  };

  const removeZone = (zone: string) => {
    if (zone) {
      const tempZones = [...zones];
      tempZones.splice(zones.indexOf(zone), 1);
      setZones(tempZones);
    }
  };

  const clearAll = () => {
    setZones([]);
  };

  return (
    <TimeZoneContext.Provider value={{ zones, addZone, removeZone, clearAll }}>
      {children}
    </TimeZoneContext.Provider>
  );
};

export const useTimeZone = () => useContext(TimeZoneContext);
