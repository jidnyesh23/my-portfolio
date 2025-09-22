"use client"

import { useEffect, useRef } from "react"

export default function BackgroundStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const numStars = 100;

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          size: Math.random() * 3 + 2, // Bolder stars
        });
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
      ctx.save();
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          x + r * Math.cos(((18 + i * 72) * Math.PI) / 180),
          y - r * Math.sin(((18 + i * 72) * Math.PI) / 180)
        );
        ctx.lineTo(
          x + (r / 2) * Math.cos(((54 + i * 72) * Math.PI) / 180),
          y - (r / 2) * Math.sin(((54 + i * 72) * Math.PI) / 180)
        );
      }
      ctx.closePath();
      // Choose a gray shade for each star
      const grayShades = ["#fff", "#e5e7eb", "#bdbdbd", "#44464a"];
      ctx.fillStyle = grayShades[Math.floor(Math.random() * grayShades.length)];
      ctx.globalAlpha = 1.0;
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.globalAlpha = 1.0;
      ctx.restore();
    }

    function drawStars() {
      if (!ctx) return;
      // Light blue overlay
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.fillStyle = "rgba(96, 165, 250, 0.25)"; // Tailwind blue-400 with opacity
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      for (const s of stars) {
        if (ctx) drawStar(ctx, s.x, s.y, s.size);
        // Move
        s.x += s.vx;
        s.y += s.vy;
        // Bounce off edges
        if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
        if (s.y < 0 || s.y > canvas.height) s.vy *= -1;
      }
    }

    let animationId: number;
    function animate() {
      drawStars();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
      aria-hidden="true"
    />
  );
}