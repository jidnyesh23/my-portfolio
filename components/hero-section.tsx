// ...existing code...
"use client"
import React, { useEffect, useState } from "react";


const roles = [
  "MERN Stack Developer",
  "MCA Student",
  "Strong Problem Solving skills"
];

export default function HeroSection() {
  const [showHey, setShowHey] = useState(false);
  useEffect(() => {
    setShowHey(true);
  }, []);
  type Sprinkle = {
    x: number;
    y: number;
    dx: number;
    dy: number;
    color: string;
    size: number;
  };
  // Sprinkles (fluid color dots) logic
  const sprinkleColors = [
    '#39FF14', // Parrot Green
    '#FF3E3E', // Red
    '#3E8EFF', // Blue
    '#FFD700', // Yellow
    '#FF69B4', // Pink
    '#00FFD0', // Aqua
    '#FF8C00', // Orange
    '#8A2BE2', // Purple
  ];
  const SPRINKLE_COUNT = 18;
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);
  useEffect(() => {
    // Only run on client
    const initialSprinkles = Array.from({ length: SPRINKLE_COUNT }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      color: sprinkleColors[i % sprinkleColors.length],
      size: 18 + Math.random() * 12,
    }));
    setSprinkles(initialSprinkles);
  }, []);
  useEffect(() => {
    if (sprinkles.length === 0) return;
    let animationFrame: number;
    const animate = () => {
      setSprinkles((prev) =>
        prev.map((s) => {
          let nx = s.x + s.dx;
          let ny = s.y + s.dy;
          let ndx = s.dx, ndy = s.dy;
          if (nx < 0 || nx > window.innerWidth) ndx *= -1;
          if (ny < 0 || ny > window.innerHeight) ndy *= -1;
          return {
            ...s,
            x: Math.max(0, Math.min(window.innerWidth, nx)),
            y: Math.max(0, Math.min(window.innerHeight, ny)),
            dx: ndx + (Math.random() - 0.5) * 0.03,
            dy: ndy + (Math.random() - 0.5) * 0.03,
          };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [sprinkles.length]);
  // Logos for the inner circle
  const innerLogos = [
    "https://cdn-icons-png.flaticon.com/512/732/732212.png", // HTML
    "https://cdn-icons-png.flaticon.com/512/732/732190.png", // CSS
    "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", // JavaScript
    "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React
    "https://cdn-icons-png.flaticon.com/512/919/919825.png", // Node.js
  ];
  // Orbit animation effect for revolving logos
  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setOrbitAngle((prev) => (prev + 0.007) % (2 * Math.PI));
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  // Shared angle for orbit animation
  const [orbitAngle, setOrbitAngle] = useState(0);
  // Circle size for border and logo travel
  const CIRCLE_SIZE = 650;
  // Typing effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Skill/tech logos for the rotating outer circle (excluding HTML, CSS, JS, React, Node)
  const techLogos = [
    "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // Git
    "https://cdn-icons-png.flaticon.com/512/733/733553.png", // GitHub
    "https://cdn-icons-png.flaticon.com/512/5968/5968853.png", // GitLab
    "https://cdn-icons-png.flaticon.com/512/226/226772.png", // Linux
    "https://cdn-icons-png.flaticon.com/512/1055/1055687.png", // DSA
    "https://cdn-icons-png.flaticon.com/512/226/226777.png", // Java
    "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", // Bootstrap
    "https://cdn-icons-png.flaticon.com/512/919/919828.png", // Tailwind
    "https://cdn-icons-png.flaticon.com/512/919/919831.png", // Express
    "https://cdn-icons-png.flaticon.com/512/2772/2772128.png", // SQL
    "https://cdn-icons-png.flaticon.com/512/919/919836.png", // MongoDB
  ];

  // Typing effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingTimeout: NodeJS.Timeout;
    let blinkTimeout: NodeJS.Timeout;
    if (!isDeleting && typedText.length < currentRole.length) {
      typingTimeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, 80);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && typedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, 60);
    } else if (isDeleting && typedText.length === 0) {
      typingTimeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev: number) => (prev + 1) % roles.length);
      }, 400);
    }
    blinkTimeout = setTimeout(() => {
      setBlink((prev: boolean) => !prev);
    }, 500);
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(blinkTimeout);
    };
  }, [typedText, isDeleting, roleIndex]);
  return (
  <section id="hero" className="min-h-screen flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #020001 0%, #4F2107 50%, #000000 100%)" }}>
      {/* Animated sprinkles (fluid color dots) in the background */}
      <div style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }}>
        {sprinkles.map((s, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: s.x - s.size / 2,
              top: s.y - s.size / 2,
              width: s.size,
              height: s.size,
              borderRadius: '50%',
              background: s.color,
              boxShadow: `0 0 16px 2px ${s.color}33`,
              opacity: 0.13,
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              transition: 'left 0.12s, top 0.12s',
            }}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col justify-center items-start space-y-8 font-bold w-full mt-12 -ml-16" style={{ animation: 'pop-fade 0.7s cubic-bezier(0.4,0,0.2,1) both' }}>
          <div className="mb-2">
            <span
              className={`block text-xl md:text-2xl font-semibold${showHey ? ' animate-pop-fade' : ''} bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent`}
              style={{
                letterSpacing: '0.04em',
                marginLeft: '10px'
              }}
            >Hey, I'm</span>
          </div>
          <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-balance leading-tight text-left">
            <span className="drop-shadow-lg bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent">Jidnyesh</span>
            <br />
            <span className="drop-shadow-lg bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent">Chaudhari</span>
          </h1>
          <div
            className="absolute right-0 top-1/2 z-10 flex items-center justify-center"
            style={{
              transform: "translate(-30px, calc(-50% + 24px))",
              width: `${CIRCLE_SIZE}px`,
              height: `${CIRCLE_SIZE}px`,
              pointerEvents: "none",
              background: "transparent",
            }}
          >
            <div
              style={{
                width: `${CIRCLE_SIZE}px`,
                height: `${CIRCLE_SIZE}px`,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                position: "absolute",
                left: 0,
                top: 0,
                background: "rgba(255,255,255,0.04)",
                zIndex: 1,
              }}
            ></div>
            {/* Inner circle */}
            <div
              style={{
                width: `${CIRCLE_SIZE * 0.6}px`,
                height: `${CIRCLE_SIZE * 0.6}px`,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                position: "absolute",
                left: `${(CIRCLE_SIZE - CIRCLE_SIZE * 0.6) / 2}px`,
                top: `${(CIRCLE_SIZE - CIRCLE_SIZE * 0.6) / 2}px`,
                background: "transparent",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/me.jpeg"
                alt="Jidnyesh Chaudhari"
                style={{
                  width: `${CIRCLE_SIZE * 0.32}px`,
                  height: `${CIRCLE_SIZE * 0.32}px`,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
                  border: "2px solid rgba(255,255,255,0.5)",
                  zIndex: 2,
                  transform: "scaleX(-1)",
                }}
              />
            </div>
            {/* Inner circle logos */}
            {innerLogos.map((logo: string, i: number) => {
              // Place logos exactly on the inner border
              const angle = orbitAngle + (i * (2 * Math.PI / innerLogos.length));
              const borderRadius = (CIRCLE_SIZE * 0.6) / 2;
              const logoSize = 56;
              const x = Math.cos(angle) * borderRadius;
              const y = Math.sin(angle) * borderRadius;
              return (
                <img
                  key={logo}
                  src={logo}
                  alt="tech logo"
                  className="absolute tech-logo"
                  style={{
                    width: `${logoSize}px`,
                    height: `${logoSize}px`,
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transition: "left 0.2s linear, top 0.2s linear",
                    transform: `translate(-50%, -50%)`,
                    zIndex: 2,
                  }}
                  draggable={false}
                />
              );
            })}
            {techLogos.map((logo: string, i: number) => {
              // Place logos exactly on the outer border
              const angle = orbitAngle + (i * (2 * Math.PI / techLogos.length));
              const borderRadius = CIRCLE_SIZE / 2;
              const logoSize = 64;
              const x = Math.cos(angle) * borderRadius;
              const y = Math.sin(angle) * borderRadius;
              return (
                <img
                  key={logo}
                  src={logo}
                  alt="tech logo"
                  className="absolute tech-logo"
                  style={{
                    width: `${logoSize}px`,
                    height: `${logoSize}px`,
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transition: "left 0.2s linear, top 0.2s linear",
                    transform: `translate(-50%, -50%)`,
                    zIndex: 2,
                  }}
                  draggable={false}
                />
              );
            })}
          </div>
          <p className="hero-subtitle text-2xl md:text-3xl font-extrabold text-pretty leading-relaxed drop-shadow text-left" style={{ minHeight: '2.5rem' }}>
            <span className="bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent">{typedText}</span>
            <span className="bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent" style={{ opacity: blink ? 1 : 0, transition: "opacity 0.2s" }}>|</span>
          </p>
          <div className="mt-4 mb-2 hero-buttons pt-4" style={{ marginBottom: '10px', position: 'relative', top: '-12px' }}>
            <a
              href="https://www.linkedin.com/in/jidnyesh-chaudhari-2ba832211/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#bfa16a] px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#bfa16a]/20 hover:backdrop-blur-md hover:border-[#bfa16a]/40"
              style={{ transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <span className="bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent">lets connect</span>
            </a>
            <a
              href="mailto:jidnyeshtc23@gmail.com"
              className="border border-[#bfa16a] px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#bfa16a]/20 hover:backdrop-blur-md hover:border-[#bfa16a]/40 hireme-animate"
              style={{ marginLeft: '1rem', transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
            >
              <span className="bg-gradient-to-r from-[#bfa16a] to-white bg-clip-text text-transparent">Hire Me</span>
            </a>
          </div>
          <div className="pt-4" style={{ marginTop: '10px' }}>
            <div className="hero-card bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg px-4 py-1 max-w-xl text-lg text-white/90 font-medium" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)' }}>
              <span className="block text-6xl text-white/30 leading-none">“</span>
              <div className="space-y-2">
                <p>Master's pursuing student with strong problem solving skills.</p>
                <p>Let's connect and see how much I can contribute to your team.</p>
                <p>Crafting modern, intuitive user interfaces with passion and precision</p>
              </div>
              <span className="block text-6xl text-white/30 leading-none text-right">”</span>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
}
