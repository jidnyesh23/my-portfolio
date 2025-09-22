"use client";
import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x - 16,
        top: pos.y - 16,
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "#a259ff",
        pointerEvents: "none",
        zIndex: 9999,
        boxShadow: "0 0 16px 4px #a259ff88",
        transition: "left 0.05s, top 0.05s",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default Cursor;
