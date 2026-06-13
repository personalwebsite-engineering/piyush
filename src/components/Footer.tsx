import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mech-dark border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
        {/* Glow effect at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-24 bg-mech-blue/10 blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="text-2xl font-bold font-display tracking-tight text-white mb-2 block">
                        PIYUSH.<span className="text-mech-orange">MECH</span>
                    </span>
                    <p className="text-slate-500 max-w-xs text-sm">Building the future of mechanical engineering through precise design and innovative automation.</p>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="mailto:engineering2k27@gmail.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-mech-blue hover:text-black transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Piyush Pathak. All rights reserved.</p>
                <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <button 
                        onClick={scrollToTop}
                        className="flex items-center text-mech-blue hover:text-white transition-colors group"
                    >
                        Back to Top 
                        <ArrowUp className="w-4 h-4 ml-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    </footer>
  );
}
