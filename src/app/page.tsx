'use client'
import { Canvas } from '@react-three/fiber'
import Background from '@/components/Background'
import { Suspense } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-[#020617] overflow-x-hidden">
      
      {/* 3D BACKGROUND LAYER (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas shadows dpr={[1, 2]}>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
        </Canvas>
      </div>

      {/* SCROLLABLE CONTENT LAYER */}
      <div className="relative z-10 snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
        
        {/* --- NEW BLANK "COVER" SECTION --- */}
        {/* This allows the user to see the full photo before reading */}
        <section className="h-screen w-full snap-start flex flex-col items-center justify-end pb-12">
          <div className="animate-bounce flex flex-col items-center opacity-50">
            <span className="text-white text-xs uppercase tracking-widest mb-2">Scroll to Enter</span>
            {/* Simple arrow indicator */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </section>

        {/* HERO SECTION (Now the 2nd slide) */}
        <section className="h-screen flex flex-col items-center justify-center snap-start px-4">
          {/* Increased opacity to bg-black/80 to cover the photo behind it cleanly */}
          <div className="bg-black/80 backdrop-blur-md p-10 rounded-2xl border border-white/10 max-w-4xl text-center shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
              Iiro <span className="text-green-500">Valliovuo</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl font-mono text-green-400 border-t border-green-500/30 pt-4">
              ICT Specialist | IAM, Cloud Services, and IT Processes | Software Developer
            </p>
          </div>
        </section>

        {/* ACADEMIC SECTION */}
        <section className="min-h-screen flex items-center justify-center snap-start px-6 md:px-32 py-20">
          <div className="max-w-4xl w-full bg-black/80 backdrop-blur-xl p-8 border-l-4 border-green-500 rounded-r-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">Professional Profile</h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              ICT specialist (Bachelor of Business Administration, Information Technology) with strong technical expertise
              in identity management, cloud services, and information systems.
              My areas of expertise include access rights automation, system architectures,
              and IT processes. I am a solution-oriented and quick-learning expert who combines
              technical expertise with user-oriented service and the development of reliable ICT solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-green-500 font-bold uppercase text-sm tracking-tighter">Education</h3>
                <div>
                  <p className="text-white font-bold">Hyvinkään High School 2018-2021</p>
                  <p className="text-gray-400 text-sm italic">Natural sciences</p>
                  <p className="text-white font-bold">LAB University of Applied Sciences 2022-2025</p>
                  <p className="text-gray-400 text-sm italic">BBA, Business Information Technology</p>
                  <p className="text-green-400 font-bold mt-1">GPA: 4.1 / 5.00</p>

                  <ul className="text-gray-300 text-sm mt-3 space-y-1">
                  <li>•Identity and access management concepts, automation, and system integration</li>
                  <li>•Cloud architectures and infrastructure models</li>
                  <li>•IT systems, processes, and service management</li>
                  <li>•Programming (Python, C#, frontend) and software development projects</li>
                  <li>•Agile methods and ICT project work</li>
                  </ul>

                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bachelors Thesis: "The Future of Cloud Computing: Hyperscale and DePIN in Perspective (Comparative Study of Centralized and Decentralized GPU Infrastructure Models)"
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-green-500 font-bold uppercase text-sm tracking-tighter">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Identity & Access Management (IAM)',
                    'Python & Automation',
                    'Cloud Architecture',
                    'Microsoft 365 / Azure AD Concepts',
                    'IT Service Management (ITIL mindset)',
                    'Networking Fundamentals (TCP/IP, VPN, VLAN)',
                    'System Integration',
                    'React / Next.js',
                    'SQL / PostgreSQL'
                  ].map((s) => (
                    <span key={s} className="px-2 py-1 bg-white/10 border border-white/10 text-gray-300 text-xs rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="min-h-screen flex items-center justify-center snap-start px-6 md:px-32 py-20">
          <div className="max-w-4xl w-full bg-black/80 backdrop-blur-xl p-8 border-r-4 border-green-500 rounded-l-xl">
            <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-widest">Work History</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-xl italic">Chef X Oy</h3>
                <p className="text-green-500 font-mono text-sm uppercase">General Assistant & Logistics | 2021 – 2022</p>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Facilitated daily operations through culinary assistance and managed internal logistics by delivering prepared food products to retail locations. Developed strong time-management and operational reliability prior to academic studies.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl italic">Berachain</h3>
                <p className="text-green-500 font-mono text-sm uppercase">Community Developer 2023-2024</p>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  Various on-chain transaction testing and bug hunting tasks. Bug reporting and Proof of Liquidity testing on berachain testnet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOBBIES SECTION */}
        <section className="h-screen flex items-center justify-center snap-start px-6">
          <div className="max-w-4xl text-center bg-black/80 p-10 rounded-3xl backdrop-blur-md border border-white/5">
            <h2 className="text-4xl font-bold text-white mb-10 italic">More about me</h2>
            
            {/* Triangle Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Top Left */}
              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors">
                <h3 className="text-green-500 font-bold mb-2 uppercase tracking-wider">Aviation</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Licensed Glider Pilot (SPL+TMG). Trained in precision, meteorology, and quick decision-making under high-pressure environments.
                </p>
              </div>

              {/* Top Right */}
              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors">
                <h3 className="text-green-500 font-bold mb-2 uppercase tracking-wider">Mechanics</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enthusiastic about repairing and building equipment. Applied problem solving through mechanical diagnostics, repair, and assembly.
                </p>
              </div>

              {/* Bottom Center (The "Tip" of the triangle) */}
              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg md:col-span-2 md:w-3/4 md:mx-auto hover:bg-green-500/10 transition-colors">
                <h3 className="text-green-500 font-bold mb-2 uppercase tracking-wider">Stocks & Trading</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Active interest in stocks and system trading. Utilizing data analysis skills to track macro-economic trends and technical indicators for informed decision making. Specialized in Decentralized Systems and Cryptocurrencies (Tokenomics and DeFi)
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </main>
  )
}