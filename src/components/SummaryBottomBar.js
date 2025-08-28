// src/components/SummaryBottomBar.jsx
import React from "react";

export default function SummaryBottomBar({ count, onContinue, disabled = false }) {
  return (
    <div className="summary-bottom-bar">
      <div className="summary-content">
        <div className="summary-info">
          <div className="summary-text">
            Total Dish Selected {count}
          </div>
          <div className="summary-arrow">→</div>
        </div>
        <button
          className={`summary-continue-btn ${count > 0 ? 'active' : 'disabled'}`}
          onClick={onContinue}
          disabled={count === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
