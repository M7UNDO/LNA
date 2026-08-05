import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Back.css";

export default function Back() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="back-btn"
      aria-label="Go back to previous page"
    >
      <span className="back-btn__icon-wrapper" aria-hidden="true">
        <svg
          className="back-btn__arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </span>
      <span className="back-btn__text">Back</span>
    </button>
  );
}