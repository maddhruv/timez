import React from 'react';
import { Icon } from '../Icon';
import './AppBar.css';

export const AppBar = () => {
  return (
    <div className="appbar">
      <div className="brand">
        <Icon /> Timez
      </div>
      <div className="settings">
        <i className="gg-options"></i>
      </div>
    </div>
  );
};
