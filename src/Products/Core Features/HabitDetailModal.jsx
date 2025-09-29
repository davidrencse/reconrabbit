// HabitDetailModal.jsx
import React from 'react';
import './HabitDetailModal.css';

const HabitDetailModal = ({ card, onClose }) => {
  return (
    <div className="habit-modal-backdrop" onClick={onClose}>
      <div className="habit-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={card.image} alt={card.title} className="modal-image" />
        <h2>{card.title}</h2>
        <p className="modal-description">{card.detail}</p>

        <div className="modal-stats">
          <div><h3>10k+</h3><p>Paying users</p></div>
          <div><h3>500k+</h3><p>Active users</p></div>
          <div><h3>45%</h3><p>YC companies use Zρ</p></div>
          <div><h3>66%</h3><p>Top AI startups use Zρ</p></div>
        </div>
      </div>
    </div>
  );
};

export default HabitDetailModal;
