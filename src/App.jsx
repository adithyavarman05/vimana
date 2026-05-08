import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Aperture, 
  Cpu, 
  Tractor, 
  Map, 
  ShieldAlert, 
  Package, 
  X,
  ChevronRight,
  Zap,
  Activity
} from 'lucide-react';

// Data
const teamMembers = [
  { id: 1, name: "Name 1", title: "Chief Executive Officer", specialty: "Strategic vision and enterprise drone operations scaling." },
  { id: 2, name: "Name 2", title: "Chief Operations Officer", specialty: "Streamlining manufacturing and global supply chain logistics." },
  { id: 3, name: "Name 3", title: "Lead Systems Engineer", specialty: "Custom FPV architectures and proprietary flight controllers." },
  { id: 4, name: "Name 4", title: "Head of Payload Integration", specialty: "Designing modular mounts for cinematic and industrial sensors." },
  { id: 5, name: "Name 5", title: "Flight Dynamics Specialist", specialty: "Aerodynamic optimization and high-speed stability." },
  { id: 6, name: "Name 6", title: "Software Architect", specialty: "Autonomous navigation algorithms and edge computing." },
];

const fpvProducts = [
  { id: 1, name: "Freestyle FPV", desc: "Agile, durable frame built for extreme acrobatics.", icon: Rocket, comingSoon: false },
  { id: 2, name: "Cinewhoop", desc: "Stable platform with ducted props for close-proximity filming.", icon: Aperture, comingSoon: false },
  { id: 3, name: "Custom FPV Build", desc: "Tailor-made rigs engineered to your exact mission specs.", icon: Cpu, comingSoon: false },
];

const industrialProducts = [
  { id: 4, name: "Agriculture", desc: "Precision crop monitoring and spraying capabilities.", icon: Tractor, comingSoon: true },
  { id: 5, name: "Photogrammetry", desc: "High-resolution 3D mapping and terrain modeling.", icon: Map, comingSoon: true },
  { id: 6, name: "Surveillance", desc: "Silent, persistent observation with thermal imaging.", icon: ShieldAlert, comingSoon: true },
  { id: 7, name: "Heavy Lift", desc: "High payload capacity for cinema cameras and industrial gear.", icon: Package, comingSoon: true },
];

export default function App() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-astro text-clark font-sans relative">
      {/* Vibrant Background ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/15 blur-[140px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-500/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-neon-pink/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-orion to-neon-cyan tracking-widest uppercase">
          Vimana <span className="text-clark">Aerospace</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wider text-clark/80">
          <a href="#hero" className="hover:text-neon-cyan transition-colors">Mission</a>
          <a href="#team" className="hover:text-neon-cyan transition-colors">Leadership</a>
          <a href="#products" className="hover:text-neon-cyan transition-colors">Fleet</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 min-h-[80vh] flex items-center justify-center px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-clark via-neon-cyan to-neon-purple/90"
          >
            Drones Built For <br/>Every Mission.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-clark/80 mb-10 max-w-2xl mx-auto font-light"
          >
            From custom FPV rigs to industrial platforms—engineered with vibrant precision.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="antigravity-card inline-flex items-center space-x-2 px-8 py-4 rounded-full border border-neon-cyan bg-astro/80 backdrop-blur-md text-neon-cyan hover:bg-neon-cyan/10 transition-all font-medium tracking-wide shadow-[0_0_20px_rgba(0,243,255,0.4)]"
          >
            <span>Explore The Fleet</span>
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="relative z-10 py-24 px-8 bg-black/20 backdrop-blur-sm border-y border-clark/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Command <span className="text-neon-cyan">Core</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`flex flex-col items-center cursor-pointer group antigravity-card card-${index}`}
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-neon-cyan/30 group-hover:border-neon-purple transition-colors duration-500 p-1 bg-gradient-to-br from-astro via-astro to-neon-purple/20 overflow-hidden flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-astro flex items-center justify-center text-4xl font-bold text-clark/50 group-hover:text-neon-cyan transition-colors group-hover:scale-110 duration-500 shadow-inner">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  {/* Subtle orbit ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon-cyan/10 rounded-full group-hover:border-neon-pink/40 transition-colors animate-[spin_10s_linear_infinite]" />
                </div>
                <h3 className="text-xl font-medium text-clark mb-1 text-center group-hover:text-neon-cyan transition-colors">{member.name}</h3>
                <p className="text-sm text-clark/50 uppercase tracking-widest text-center">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aero <span className="text-neon-purple">Systems</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto rounded-full" />
          </div>

          {/* FPV Drones Grid */}
          <div className="mb-20">
            <div className="flex items-center space-x-3 mb-8">
              <Zap className="text-neon-cyan" size={28} />
              <h3 className="text-2xl font-bold text-clark tracking-wide">FPV Drones</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fpvProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`antigravity-card card-${index % 6} relative p-8 rounded-2xl border border-neon-cyan/30 bg-black/40 hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] backdrop-blur-md group overflow-hidden transition-all duration-300`}
                >
                  <div className={`mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-astro to-black border border-neon-cyan/20 text-neon-cyan group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] transition-all duration-300`}>
                    <product.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-clark group-hover:text-neon-cyan transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-clark/70">
                    {product.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional & Industrial Drones Grid */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Activity className="text-neon-purple" size={28} />
              <h3 className="text-2xl font-bold text-clark tracking-wide">Professional & Industrial Drones</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrialProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`antigravity-card card-${(index + 3) % 6} relative p-8 rounded-2xl border border-clark/10 bg-astro/40 hover:border-neon-purple/50 hover:bg-black/40 backdrop-blur-sm group overflow-hidden transition-all duration-300`}
                >
                  <div className="absolute top-4 right-4 px-3 py-1 bg-neon-purple/10 rounded-full text-xs font-semibold tracking-wider text-neon-purple border border-neon-purple/20">
                    COMING SOON
                  </div>
                  
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-astro border border-clark/5 text-neon-purple/50 group-hover:text-neon-purple group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(181,0,255,0.2)] transition-all duration-300">
                    <product.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-clark/60 group-hover:text-clark transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-clark/40 group-hover:text-clark/60 transition-colors">
                    {product.desc}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 py-8 px-8 relative z-10 bg-black/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-clark/50">
          <p>© 2026 Vimana Aerospace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Terms</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      {/* Modal / Detail Reveal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-astro/90 backdrop-blur-xl border border-neon-cyan/50 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,243,255,0.2)] overflow-hidden"
            >
              {/* Modal Background Deco */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-neon-cyan/10 blur-[60px] rounded-full pointer-events-none" />
              
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 text-clark/50 hover:text-neon-pink transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-24 h-24 rounded-full bg-black border border-neon-cyan flex items-center justify-center text-3xl font-bold text-neon-cyan mb-6 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
                  {selectedMember.name.charAt(0)}
                </div>
                
                <h3 className="text-3xl font-bold text-clark mb-2">{selectedMember.name}</h3>
                <p className="text-neon-cyan text-sm uppercase tracking-widest font-semibold mb-8">
                  {selectedMember.title}
                </p>
                
                <div className="bg-black/40 w-full p-6 rounded-2xl border border-neon-purple/20">
                  <p className="text-xs text-neon-purple uppercase tracking-widest mb-2 font-semibold">Mission Specialty</p>
                  <p className="text-clark/90 text-lg leading-relaxed">
                    {selectedMember.specialty}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
