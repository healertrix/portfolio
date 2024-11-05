'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  angle: number;
  opacity: number;
}

export default function ParticleShower() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.3 + Math.random() * 0.7, // Slightly slower, more consistent speed
      size: 0.5 + Math.random() * 0.8,  // Smaller size range
      angle: Math.PI / 6,
      opacity: 0.1 + Math.random() * 0.3 // Variable opacity for depth
    }));

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Create a subtle glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, 
          particle.y, 
          0,
          particle.x, 
          particle.y, 
          particle.size * 2
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position with diagonal movement
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Reset particle when it goes off screen
        if (particle.y > canvas.height || particle.x > canvas.width) {
          // Reset to left side or top randomly
          if (Math.random() > 0.5) {
            particle.x = -10;
            particle.y = Math.random() * canvas.height * 0.5;
            particle.opacity = 0.1 + Math.random() * 0.3; // Reset opacity
          } else {
            particle.x = Math.random() * canvas.width * 0.3;
            particle.y = -10;
            particle.opacity = 0.1 + Math.random() * 0.3; // Reset opacity
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
} 