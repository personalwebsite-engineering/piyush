import { motion } from 'motion/react';
import { PenTool, Box, Wrench, Settings, BrainCircuit } from 'lucide-react';

const coreSkills = [
  { name: 'CAD Design', level: 90 },
  { name: 'SolidWorks', level: 85 },
  { name: 'AutoCAD', level: 80 },
  { name: 'CATIA', level: 75 },
  { name: 'Fusion 360', level: 85 },
  { name: 'Machine Design', level: 80 },
  { name: 'Manufacturing Processes', level: 75 },
  { name: 'Thermodynamics', level: 70 },
  { name: 'Fluid Mechanics', level: 75 },
];

const softwareSkills = [
  { name: 'MATLAB', icon: BrainCircuit, color: 'text-orange-500' },
  { name: 'ANSYS', icon: Box, color: 'text-yellow-500' },
  { name: 'Python', icon: PenTool, color: 'text-blue-500' },
  { name: 'MS Excel', icon: Settings, color: 'text-green-500' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 border-y border-white/5 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-mech-orange">Proficiency</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mech-orange to-mech-blue mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Engineering Skills */}
          <div className="lg:col-span-2 glass-panel p-8">
            <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center">
              <Wrench className="w-5 h-5 mr-3 text-mech-silver" />
              Mechanical Engineering & Design
            </h3>
            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-mech-blue">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-mech-blue to-mech-orange h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div className="glass-panel p-8 h-fit">
            <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center">
              <Box className="w-5 h-5 mr-3 text-mech-silver" />
              Software & Analytical
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softwareSkills.map((software, index) => {
                const Icon = software.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    key={software.name}
                    className="flex flex-col items-center justify-center p-6 bg-slate-800/40 rounded-xl hover:bg-slate-700/50 transition-colors border border-white/5"
                  >
                    <Icon className={`w-8 h-8 mb-3 ${software.color}`} />
                    <span className="text-sm font-medium text-slate-300">{software.name}</span>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-8 p-6 bg-mech-blue/10 border border-mech-blue/20 rounded-xl">
              <h4 className="text-mech-blue font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-slate-400">
                Constantly expanding my toolkit with modern industry standard engineering software and simulation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
