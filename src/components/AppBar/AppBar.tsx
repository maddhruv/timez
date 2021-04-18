import React from 'react';
import { Icon } from '@components/Icon';
import { Settings } from '@components/Settings';
import './AppBar.css';

export const AppBar = () => {
  return (
    <div className="appbar">
      <div className="brand">
        <Icon /> Timez
      </div>
      <Settings />
    </div>
  );
};
