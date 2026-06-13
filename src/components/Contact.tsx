import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-mech-orange">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-mech-orange to-mech-blue mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">Open for internships, projects, and collaborative opportunities in mechanical engineering and manufacturing.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-panel p-8">
               <h3 className="text-2xl font-bold text-white mb-6">Let's build something <span className="text-mech-blue">together.</span></h3>
               
               <div className="space-y-6">
                  <a href="mailto:engineering2k27@gmail.com" className="flex items-center group">
                     <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-mech-blue group-hover:bg-mech-blue group-hover:text-black transition-colors">
                        <Mail className="w-6 h-6" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500">Email Me</p>
                        <p className="text-white font-medium group-hover:text-mech-blue transition-colors">engineering2k27@gmail.com</p>
                     </div>
                  </a>

                  <a href="#" className="flex items-center group">
                     <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-mech-silver group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                        <Linkedin className="w-6 h-6" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500">Connect on LinkedIn</p>
                        <p className="text-white font-medium group-hover:text-[#0077b5] transition-colors">linkedin.com/in/piyushpathak</p>
                     </div>
                  </a>

                  <a href="#" className="flex items-center group">
                     <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-mech-silver group-hover:bg-white group-hover:text-black transition-colors">
                        <Github className="w-6 h-6" />
                     </div>
                     <div className="ml-4">
                        <p className="text-sm font-medium text-slate-500">View GitHub Profile</p>
                        <p className="text-white font-medium group-hover:text-white transition-colors">github.com/piyushmech</p>
                     </div>
                  </a>
               </div>
            </div>
            
            {/* Minimal Map or Graphic placeholder */}
            <div className="h-48 glass-panel overflow-hidden relative flex items-center justify-center bg-slate-900">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               <div className="z-10 text-center">
                  <div className="w-4 h-4 bg-mech-orange rounded-full animate-ping mx-auto mb-2"></div>
                  <p className="text-slate-300 font-medium tracking-widest text-sm uppercase">Surat, Gujarat, India</p>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mech-blue focus:ring-1 focus:ring-mech-blue transition-all" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email</label>
                    <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mech-orange focus:ring-1 focus:ring-mech-orange transition-all" placeholder="john@example.com" />
                 </div>
              </div>
              
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Subject</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mech-blue focus:ring-1 focus:ring-mech-blue transition-all" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Message</label>
                  <textarea rows={5} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-mech-blue focus:ring-1 focus:ring-mech-blue transition-all resize-none" placeholder="Hello Piyush..."></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-mech-blue to-[#00aaff] hover:from-[#00cce6] hover:to-[#0088cc] text-black font-bold rounded-lg transition-all flex items-center justify-center group glow-blue">
                 Send Message
                 <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
