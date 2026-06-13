import { motion } from 'motion/react';
import { Download, GraduationCap, MapPin, Target } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-mech-blue">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mech-blue to-mech-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder / Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2">
              <div className="w-full h-full bg-slate-800 rounded-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-mech-blue/20 to-mech-orange/20 mix-blend-overlay z-10"></div>
                {/* Fallback pattern since we don't have a real photo */}
                <div className="w-full h-full opacity-30 flex items-center justify-center">
                   <div className="grid grid-cols-6 gap-2 w-full h-full p-4">
                     {Array.from({ length: 36 }).map((_, i) => (
                       <div key={i} className="w-full h-full bg-slate-700/50 rounded-sm"></div>
                     ))}
                   </div>
                </div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                   <span className="text-slate-400 font-display tracking-widest text-sm uppercase">Professional Photo</span>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-mech-blue rounded-tl-xl opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-mech-orange rounded-br-xl opacity-50"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white">
              Driven by <span className="text-mech-orange">Precision</span> & <span className="text-mech-blue">Innovation</span>
            </h3>
            
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a passionate Mechanical Engineering student dedicated to solving complex
              industrial challenges. My academic journey at Government Engineering College (GEC), Surat, 
              has equipped me with a strong foundation in design, thermodynamics, and manufacturing.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-800/50 rounded-lg text-mech-blue">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">B.E. Mechanical Engineering</h4>
                  <p className="text-slate-500 text-sm">Government Engineering College, Surat • 2023 - 2027</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-800/50 rounded-lg text-mech-orange">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Career Objective</h4>
                  <p className="text-slate-500 text-sm">Seeking opportunities in mechanical design, manufacturing, and R&D to leverage my skills in CAD and analytical modeling.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-800/50 rounded-lg text-mech-silver">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate-500 text-sm">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-mech-surface border border-slate-700 hover:border-mech-blue hover:bg-slate-800 text-white transition-all group">
                <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
