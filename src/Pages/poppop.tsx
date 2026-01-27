import React, { useEffect, useRef } from "react";
import "./poppop.css";

type Props = { show: boolean; onClose: () => void };

const Poppop: React.FC<Props> = ({ show, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!show) return;
    // Focus the dialog when it opens
    dialogRef.current?.focus();
    // Close on Escape
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    // Prevent background scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="poppop-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-title"
        aria-describedby="cookie-desc"
        className="poppop-dialog animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={dialogRef}
      >
        <h2 id="cookie-title" className="poppop-title">Cookies & Usage</h2>
        <p id="cookie-desc" className="poppop-text">
          We use cookies to improve your experience. By using this site, you
          agree to our cookie policy.
        </p>
        <div className="poppop-actions">
          <button onClick={onClose} className="poppop-btn">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default Poppop;