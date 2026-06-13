import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Preload } from '@react-three/drei';
import { GearSystem } from './Gears3D';
import { ArrowDown, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00e5ff" />
          <spotLight position={[0, 10, 0]} intensity={1} color="#ff6a00" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <GearSystem />
          </Float>
          <Environment preset="city" />
          <Preload all />
        </Canvas>
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-mech-surface border border-slate-700 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-mech-blue animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">Available for Internships 2026/2027</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight text-white">
            Piyush <span className="text-transparent bg-clip-text bg-gradient-to-r from-mech-blue to-mech-orange">Pathak</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-slate-300 font-display mb-6">
            Mechanical Engineer & Future Innovator
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Crafting the future through precise design, thermal analysis, and automated systems. B.E. Mechanical Engineering student at GEC Surat.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-mech-blue hover:bg-[#00cce6] text-black font-semibold transition-all glow-blue group">
              <Briefcase className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-mech-surface border border-mech-silver/30 hover:bg-slate-800 text-white font-medium transition-all group">
              <Mail className="w-5 h-5 mr-2 group-hover:text-mech-orange transition-colors" />
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Empty col for 3D visual balance on desktop */}
        <div className="hidden lg:block"></div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-mech-blue transition-colors cursor-pointer"
      >
        <a href="#about">
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
