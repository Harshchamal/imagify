import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import * as THREE from 'three';

const Stars = () => {
  const ref = useRef();
  const [positions] = useState(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.5;
      const t = 2 * Math.PI * Math.random();
      const p = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(p) * Math.cos(t);
      pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      pos[i * 3 + 2] = r * Math.cos(p);
    }
    return pos;
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.set(0, 0, 0);
    }
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <pointsMaterial
        size={0.002}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={0.8}
        color="#ffffff"
      />
    </Points>
  );
};

export default Stars;
