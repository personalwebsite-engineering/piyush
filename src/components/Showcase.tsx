import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, PivotControls } from '@react-three/drei';
import { motion } from 'motion/react';
import * as THREE from 'three';

function EngineBlock() {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if(group.current) {
        group.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={group}>
      {/* Abstract Engine Block */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 2]} />
        <meshStandardMaterial color="#a0aec0" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Cylinders */}
      {[[-1, 1], [0, 1], [1, 1]].map((pos, i) => (
        <mesh key={i} position={[pos[0], pos[1], 0]} rotation={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
          <meshStandardMaterial color="#00e5ff" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      {/* Flywheel */}
      <mesh position={[1.6, 0, 0]} rotation={[0, 0, Math.PI/2]} castShadow receiveShadow>
         <cylinderGeometry args={[1.2, 1.2, 0.4, 32]} />
         <meshStandardMaterial color="#ff6a00" metalness={0.8} roughness={0.4} />
      </mesh>
    </group>
  );
}

export function Showcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">3D Engineering <span className="text-mech-blue">Showcase</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mech-blue to-mech-orange mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">Interactive exploded view of an abstract mechanical assembly. Drag to rotate, scroll to zoom.</p>
        </motion.div>
      </div>

      <div className="w-full h-[600px] bg-slate-900/50 border-y border-slate-800 relative cursor-move">
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"></div>
        <div className="absolute top-4 left-4 z-20 glass-panel px-4 py-2 text-xs font-mono text-mech-blue flex items-center">
            <span className="w-2 h-2 bg-mech-blue rounded-full animate-pulse mr-2"></span>
            INTERACTIVE RENDER ENGINES ACTIVE
        </div>
        
        <Canvas shadows dpr={[1, 2]} camera={{ position: [5, 4, 6], fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.5} adjustCamera={false}>
              <EngineBlock />
            </Stage>
            <OrbitControls 
                makeDefault 
                autoRotate 
                autoRotateSpeed={0.5} 
                minPolarAngle={Math.PI / 4} 
                maxPolarAngle={Math.PI / 1.5} 
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
