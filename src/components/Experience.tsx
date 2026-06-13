import { motion } from 'motion/react';
import { Briefcase, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';

const experiences = [
  {
    type: 'internship',
    title: 'Mechanical Design Intern',
    organization: 'Industrial Automation Solutions',
    date: 'Summer 2025',
    description: 'Assisted in the design of modular conveyor belts. Performed load calculations and created drafts in AutoCAD.',
    icon: Briefcase,
    color: 'text-[#00e5ff]',
    borderColor: 'border-[#00e5ff]'
  },
  {
    type: 'visit',
    title: 'Industrial Visit',
    organization: 'L&T Heavy Engineering, Hazira',
    date: 'February 2024',
    description: 'Observed large-scale manufacturing processes, CNC machining, and heavy pressure vessel fabrication.',
    icon: BookOpen,
    color: 'text-[#a0aec0]',
    borderColor: 'border-[#a0aec0]'
  },
  {
    type: 'workshop',
    title: 'Advanced SolidWorks Workshop',
    organization: 'GEC Surat Mechanics Club',
    date: 'November 2023',
    description: 'Intensive hands-on training on surface modeling, assembly mates, and simulation tools.',
    icon: Calendar,
    color: 'text-[#ff6a00]',
    borderColor: 'border-[#ff6a00]'
  }
];

const achievements = [
  {
    title: '1st Runner Up - CAD Battle',
    event: 'TechFest 2024, NIT Surat',
    description: 'Modeled a complex mechanical assembly within a strict time limit.'
  },
  {
    title: 'Certified SolidWorks Associate (CSWA)',
    event: 'Dassault Systèmes',
    description: 'Demonstrated proficiency in mechanical design using SolidWorks.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/30 border-y border-white/5">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        
        {/* Timeline Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-mech-blue">Visits</span></h2>
            <div className="w-16 h-1 bg-mech-blue rounded-full"></div>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-mech-dark bg-slate-800 ${exp.color} ${exp.borderColor} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6">
                    <div className="flex flex-col mb-2">
                       <span className={`text-xs font-bold font-display uppercase tracking-wider mb-1 ${exp.color}`}>{exp.date}</span>
                       <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    </div>
                    <p className="text-mech-silver font-medium text-sm mb-3">{exp.organization}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Achievements Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & <span className="text-mech-orange">Achievements</span></h2>
            <div className="w-16 h-1 bg-mech-orange rounded-full"></div>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className="glass-panel p-6 border-l-4 border-l-mech-orange"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-slate-800 rounded-lg text-mech-orange mr-4 mt-1">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-mech-silver text-sm font-medium mb-3">{item.event}</p>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                    {item.title.includes('CSWA') && (
                      <a href="#" className="inline-flex items-center mt-3 text-xs font-medium text-mech-blue hover:text-white transition-colors">
                        View Certificate <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Static Certificate Box */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50"
              >
                  <h3 className="text-lg font-bold text-white mb-2">Autodesk Fusion 360 Training</h3>
                  <p className="text-slate-400 text-sm mb-4">Completed 30-hour comprehensive training course on generative design and CAM.</p>
                  <a href="#" className="inline-flex items-center text-xs font-medium text-[#00e5ff] hover:text-white transition-colors">
                      Verify Credential <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
