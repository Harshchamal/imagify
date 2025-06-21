import React from 'react';
import { Canvas } from '@react-three/fiber';
import Stars from './Stars';
import ParticleBackground from './ParticleBackground';

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative">
      {/* Background layer */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
        <ParticleBackground />
      </div>

      {/* App content above background */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
