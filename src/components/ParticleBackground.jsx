import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// The actual 3D object
const ParticleMesh = () => {
  const pointsRef = useRef();

  // Generate a swirling, twisting parametric point cloud
  const [positions, colors] = useMemo(() => {
    // To get the smooth structured "mesh" look from the screenshot,
    // we MUST use a regular grid instead of random placement.
    // --- TWEAK DOT DENSITY ---
    // Increase these numbers (e.g. 200) for a tighter grid of dots.
    // Decrease them (e.g. 100) for a more spaced out, sparser grid.
    const gridX = 160;
    const gridY = 160;
    const numPoints = gridX * gridY;
    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);
    
    const colorBase = new THREE.Color('#ff5500');
    
    let index = 0;
    for (let i = 0; i < gridX; i++) {
      for (let j = 0; j < gridY; j++) {
        // Map to u, v in [0, 2*PI]
        const u = (i / gridX) * Math.PI * 2;
        const v = (j / gridY) * Math.PI * 2;
        
        // Parametric equations for a smooth, folded warped torus
        // --- TWEAK OVERALL SHAPE & WIDTH ---
        // Change R to make the entire shape wider or narrower (Overall Size)
        const R = 3.5; 
        // Change r to make the "tube" or folds of the shape thicker/wider
        const r = 1.5; 
        
        // --- TWEAK FOLDS ---
        // Change this to add more or fewer twists/loops to the shape
        const twist = 2; 
        
        const x = (R + r * Math.cos(v + u * twist)) * Math.cos(u);
        const y = (R + r * Math.cos(v + u * twist)) * Math.sin(u);
        
        // Add sweeping curves on the Z axis
        const z = r * Math.sin(v) + Math.sin(u * 3) * 1.2 + Math.cos(v * 2) * 0.5; 

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;
        
        // Keep the color strictly uniform to emphasize the grid geometry
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
      // --- TWEAK SPEED OF ROTATION ---
      // Increase these numbers to make the shape spin faster
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.08;
      
      // Gentle floating effect
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
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
        // --- TWEAK DOT SIZE ---
        // Increase this to make individual dots bigger/chunkier
        size={0.025} 
        vertexColors 
        transparent 
        // --- TWEAK OPACITY ---
        // Make it closer to 1.0 for solid dots, lower for ghostly dots
        opacity={0.6}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
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
