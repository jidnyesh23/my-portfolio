"use client";
import React, { useEffect, useState } from "react";

const UpArrowButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.querySelector("section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToHero}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "#a259ff",
        color: "white",
        border: "none",
        boxShadow: "0 4px 16px 0 #a259ff55",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "opacity 0.3s",
        opacity: visible ? 1 : 0,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
    </button>
  );
};

export default UpArrowButton;
