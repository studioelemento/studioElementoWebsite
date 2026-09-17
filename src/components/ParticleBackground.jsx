import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// The actual 3D object
const ParticleMesh = () => {
  const pointsRef = useRef();

  // Generate a swirling, twisting parametric point cloud
  const [positions, colors] = useMemo(() => {
    // To get the smooth structured "mesh" look with even spacing,
    // we MUST use a regular grid where the ratio of X to Y matches
    // the physical dimensions of the shape.
    // Major radius (R) = 3.5, minor radius (r) = 1.5. Ratio = ~2.33.
    // gridX = 140, gridY = 60 maintains this ratio perfectly (140/60 = 2.33).
    const gridX = 140;
    const gridY = 60;
    const numPoints = gridX * gridY;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    // Read the primary color from your CSS theme variables
    const rootStyle = getComputedStyle(document.documentElement);
    const primaryColor = rootStyle.getPropertyValue('--color-primary').trim() || '#FF5A14';
    const colorBase = new THREE.Color(primaryColor);

    let index = 0;
    for (let i = 0; i < gridX; i++) {
      for (let j = 0; j < gridY; j++) {
        // Map to u, v in [0, 2*PI]
        const u = (i / gridX) * Math.PI * 2;
        const v = (j / gridY) * Math.PI * 2;

        // Parametric equations for a smooth, folded warped torus
        const R = 3.5;
        const r = 1.5;
        const twist = 2;

        const x = (R + r * Math.cos(v + u * twist)) * Math.cos(u);
        const y = (R + r * Math.cos(v + u * twist)) * Math.sin(u);

        // Add sweeping curves on the Z axis
        const z = r * Math.sin(v) + Math.sin(u * 3) * 1.2 + Math.cos(v * 2) * 0.5;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        // Keep the color strictly uniform
        colors[index * 3] = colorBase.r;
        colors[index * 3 + 1] = colorBase.g;
        colors[index * 3 + 2] = colorBase.b;

        index++;
      }
    }

    return [positions, colors];
  }, []);

  // Animate the point cloud on every frame
  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Bring back the original swirling 3D rotation
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.08;

      // Gentle floating effect
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <points ref={pointsRef} scale={0.9}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        // Increased dot size to make them much more visible
        size={0.07}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        // Remove AdditiveBlending so overlapping dots stay orange instead of turning yellow/gold
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

// The wrapper Canvas component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }}>
        <ParticleMesh />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
