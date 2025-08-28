// src/pages/NotFoundPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <button className="nav-button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}
