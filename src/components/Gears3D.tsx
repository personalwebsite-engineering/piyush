import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GearProps {
  position: [number, number, number];
  color?: string;
  speed?: number;
  teeth?: number;
  radius?: number;
}

export function Gear({ position, color = '#a0aec0', speed = 1, teeth = 12, radius = 2 }: GearProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * speed;
    }
  });

  const toothGeometry = new THREE.BoxGeometry(0.6, radius * 0.4, 0.4);
  toothGeometry.translate(0, radius, 0);

  return (
    <group ref={groupRef} position={position}>
      {/* Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius * 0.9, radius * 0.9, 0.4, 32]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Hole */}
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[radius * 0.3, radius * 0.3, 0.45, 32]} />
        <meshStandardMaterial color="#000000" metalness={1} roughness={1} />
      </mesh>
      
      {/* Teeth */}
      {Array.from({ length: teeth }).map((_, i) => (
        <mesh 
          key={i} 
          castShadow 
          receiveShadow 
          geometry={toothGeometry}
          rotation={[0, 0, (i / teeth) * Math.PI * 2]}
        >
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      
      {/* Inner Ring Detail */}
      <mesh position={[0, 0, 0.22]}>
        <ringGeometry args={[radius * 0.4, radius * 0.7, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0, -0.22]}>
        <ringGeometry args={[radius * 0.4, radius * 0.7, 32]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function GearSystem() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating/rotating of the whole system based on mouse
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.05);
    }
  });

  return (
    <group ref={groupRef} rotation={[0.4, -0.2, 0]}>
      {/* Main Gear */}
      <Gear position={[0, 0, 0]} radius={2.5} teeth={16} speed={-0.2} color="#00e5ff" />
      
      {/* Connected Gear 1 */}
      <Gear position={[3.8, 1.5, 0.2]} radius={1.5} teeth={10} speed={0.33} color="#a0aec0" />
      
      {/* Connected Gear 2 */}
      <Gear position={[-1.2, -3.4, -0.2]} radius={1.2} teeth={8} speed={0.41} color="#ff6a00" />
      
      {/* Connected Gear 3 */}
      <Gear position={[2.1, -2.8, 0]} radius={1.8} teeth={12} speed={-0.28} color="#a0aec0" />
    </group>
  );
}
