import { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // smaller, optimized
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 }
          },
          color: {
            value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363']
          },
          links: {
            enable: true,
            distance: 120,
            color: '#888',
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.5,
            outModes: { default: 'bounce' }
          },
          opacity: {
            value: 0.5,
            anim: { enable: true, speed: 1 }
          },
          shape: { type: 'circle' },
          size: {
            value: { min: 1, max: 3 },
            anim: { enable: true, speed: 2 }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0"
    />
  );
};

export default ParticleBackground;
