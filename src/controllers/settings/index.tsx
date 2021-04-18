import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from 'react';

interface SettingsContextProps {
  showSeconds: boolean;
  setShowSeconds: () => void;
  show24Hours: boolean;
  setShow24Hours: () => void;
  format: string;
}

const defaultFormat = 'hh:mm:ss a';

const SettingsContext = createContext<SettingsContextProps>({
  showSeconds: true,
  setShowSeconds: () => {},
  show24Hours: true,
  setShow24Hours: () => {},
  format: defaultFormat,
});

export const SettingsProvider: React.FC = ({ children }) => {
  const [showSeconds, setShowSecondsInt] = useState<boolean>(() => {
    return window.localStorage.getItem('showSeconds') === 'true';
  });
  const [show24Hours, setShow24HoursInt] = useState<boolean>(() => {
    return window.localStorage.getItem('show24Hours') === 'true';
  });

  const [format, setFormat] = useState<string>(defaultFormat);

  useEffect(() => {
    if (showSeconds && show24Hours) {
      setFormat('HH:mm:ss');
    } else if (showSeconds && !show24Hours) {
      setFormat('hh:mm:ss a');
    } else if (!showSeconds && show24Hours) {
      setFormat('HH:MM');
    } else {
      setFormat('hh:mm a');
    }
    window.localStorage.setItem('showSeconds', `${showSeconds}`);
    window.localStorage.setItem('show24Hours', `${show24Hours}`);
  }, [showSeconds, show24Hours]);

  const setShowSeconds = () => {
    setShowSecondsInt(!showSeconds);
  };

  const setShow24Hours = () => {
    setShow24HoursInt(!show24Hours);
  };

  return (
    <SettingsContext.Provider
      value={{
        showSeconds,
        setShowSeconds,
        show24Hours,
        setShow24Hours,
        format,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
