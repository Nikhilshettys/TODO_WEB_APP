import React from 'react';
import './CSS/Todoitems.css';
import Tick from './Assets/tick.png';
import nottick from './Assets/not_tick.png';
import untick from './Assets/cross.png';

const Todoitems = ({ no, display, text, onToggle, onDelete }) => {
  return (
    <div className="todoitems">
      <div className="todoitems-container">
        <img
          src={display === 'completed' ? Tick : untick}
          alt="Toggle task status"
          onClick={() => onToggle && onToggle(no)}
          className="todoitems-icon"
        />
        <div className={`todoitems-text ${display === 'completed' ? 'completed' : ''}`}>
          {text}
        </div>
      </div>
      <img
        src={nottick}
        alt="Delete task"
        onClick={() => onDelete && onDelete(no)}
        className="todoitems-delete-icon"
      />
    </div>
  );
};

export default Todoitems;
