import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Gearbox Design and Analysis',
    description: 'Comprehensive 3D modeling and stress analysis of a multiple-stage reduction gearbox using SolidWorks and ANSYS to optimize weight and durability.',
    tech: ['SolidWorks', 'ANSYS', 'Machine Design'],
    image: 'bg-gradient-to-br from-slate-700 to-slate-900', // abstract fallback
    gradient: 'from-[#00e5ff] to-[#0055ff]'
  },
  {
    title: 'CNC Machine Component Modeling',
    description: 'Designed complex high-precision structural components for a multi-axis CNC machine, ensuring structural rigidity under dynamic loads.',
    tech: ['AutoCAD', 'Fusion 360', 'Manufacturing'],
    image: 'bg-gradient-to-br from-slate-800 to-black',
    gradient: 'from-[#ff6a00] to-[#ff0000]'
  },
  {
    title: 'Heat Exchanger Performance Analysis',
    description: 'Thermodynamic modeling and CFD simulation of a shell and tube heat exchanger to evaluate efficiency and heat transfer rates.',
    tech: ['ANSYS Fluent', 'Thermodynamics', 'MATLAB'],
    image: 'bg-gradient-to-br from-slate-900 to-slate-700',
    gradient: 'from-[#00e5ff] to-[#ff6a00]'
  },
  {
    title: '3D Printed Mechanical Assembly',
    description: 'Prototyped a compliant mechanism assembly using additive manufacturing techniques. Addressed tolerance stack-up and material limitations.',
    tech: ['CATIA', '3D Printing', 'Prototyping'],
    image: 'bg-gradient-to-br from-slate-800 to-slate-900',
    gradient: 'from-[#a0aec0] to-[#00e5ff]'
  },
  {
    title: 'Automated Conveyor System',
    description: 'Conceptualized a modular automated conveyor system including drive mechanisms, roller schematics, and load capacity calculations.',
    tech: ['SolidWorks', 'Kinematics', 'Excel'],
    image: 'bg-gradient-to-br from-slate-700 to-black',
    gradient: 'from-[#ff6a00] to-[#a0aec0]'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engineering <span className="text-mech-blue">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mech-blue to-mech-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={project.title}
              className="glass-panel overflow-hidden group flex flex-col h-full"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 Mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
                 <div className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
                 {/* Decorative overlay graphic */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-20">
                   <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
                     <div className="w-16 h-16 border border-white/20 rotate-45"></div>
                   </div>
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-mech-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <button className="text-sm font-medium text-mech-blue group-hover:text-white flex items-center transition-colors">
                    Details
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
