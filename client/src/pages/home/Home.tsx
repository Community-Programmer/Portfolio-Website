import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sparkles, Download, ExternalLink, Code, Terminal, Cpu, Database, Globe, Zap} from "lucide-react"
import SkillCard from '@/components/Skills/SkillCard'
import TechStack from '@/components/Techstak/TechStack'
import Projects from '@/components/Projects/Projects'
import Timeline from '@/components/Timeline/Timeline'
import Contact from '@/components/Contact/Contact'
import { fetchHomeContent } from '@/store/home/homeSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/store/store'
import CtaButtons from '@/components/HeroSection/CtaButtons'
import DynamicIcon from '@/components/DynamicIcon/DynamicIcon'
import axios from 'axios'

const Home: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchHomeContent());
    setIsLoaded(true);
  }, [])
  
useEffect(() => {
  axios.get('http://127.0.0.1:3000/api/v1/theme')
    .then((res) => {
      const theme = res.data;
      const root = document.documentElement;

      root.style.setProperty('--portfolio-primary', theme.portfolioPrimary);
      root.style.setProperty('--portfolio-accent', theme.portfolioAccent);
      root.style.setProperty('--portfolio-muted', theme.portfolioMuted);
      root.style.setProperty('--portfolio-primary-50', theme.portfolioPrimary50);
      root.style.setProperty('--portfolio-primary-100', theme.portfolioPrimary100);
      root.style.setProperty('--portfolio-primary-200', theme.portfolioPrimary200);
      root.style.setProperty('--portfolio-primary-300', theme.portfolioPrimary300);
      root.style.setProperty('--portfolio-primary-400', theme.portfolioPrimary400);
      root.style.setProperty('--portfolio-primary-500', theme.portfolioPrimary500);
      root.style.setProperty('--portfolio-primary-600', theme.portfolioPrimary600);
      root.style.setProperty('--portfolio-primary-lighter', theme.portfolioPrimaryLighter);
      root.style.setProperty('--portfolio-primary-lightest', theme.portfolioPrimaryLightest);
    })
    .catch((err) => {
      console.error('Failed to load theme:', err);
    });
}, []);

  const { hero } = useSelector((state: RootState) => state.home);
  
  return (
    <>
    <main
        id="home"
        className="min-h-screen bg-gradient-to-br from-slate-50 to-[var(--portfolio-primary-50)]  relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[var(--portfolio-primary)] to-[var(--portfolio-accent)] opacity-10 animate-float"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[var(--portfolio-accent)] to-[var(--portfolio-primary)] opacity-10 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--portfolio-primary)] to-[var(--portfolio-accent)] opacity-5 animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <div className={`space-y-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--portfolio-primary)]/10 border border-[var(--portfolio-primary)]/20">
                    <Sparkles className="w-4 h-4 text-[var(--portfolio-primary)]" />
                    <span className="text-sm font-medium text-[var(--portfolio-primary)]">
                      {hero?.tagline}
                    </span>
                  </div>

                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-gray-900">{hero?.introText}</span>
                    <br />
                    <span className="text-[var(--portfolio-primary)]">{hero?.name}</span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {hero?.description}
                  </p>
                </div>

                <CtaButtons ctas={hero?.ctas || []} />
 
                <div
                  className={`flex flex-wrap gap-8 justify-center lg:justify-start pt-8 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: "0.4s" }}
                >
                  {hero?.counters.map((counter) => (
                    <div className="text-center lg:text-left" key={counter.label}>
                      <div className="text-2xl font-bold text-[var(--portfolio-primary)]">{counter.value}</div>
                      <div className="text-sm text-gray-600">{counter.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Visual - Tech Elements with User Image */}
              <div
                className={`relative ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="relative w-[500px] h-[500px] mx-auto">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--portfolio-primary)] via-[var(--portfolio-accent)] to-[var(--portfolio-primary)] p-3 shadow-2xl animate-float">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-3 relative">
                      <img
                        src={hero?.profileImage}
                        alt={hero?.name}
                        className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--portfolio-primary)]/10 to-[var(--portfolio-accent)]/10 animate-pulse"></div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-[var(--portfolio-primary)] to-[var(--portfolio-accent)] rounded-full flex items-center justify-center shadow-lg border-3 border-white">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] animate-spin-slow">
                    {/* Terminal */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white/90 rounded-xl shadow-lg flex items-center justify-center border border-[var(--portfolio-primary)]/20 hover:scale-105 transition-transform duration-300">
                      <Terminal className="w-6 h-6 text-[var(--portfolio-primary)]" />
                    </div>

                    {/* Database */}
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-14 h-14 bg-white/90 rounded-xl shadow-lg flex items-center justify-center border border-[var(--portfolio-primary)]/20 hover:scale-105 transition-transform duration-300">
                      <Database className="w-6 h-6 text-[var(--portfolio-primary)]" />
                    </div>

                    {/* Globe */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white/90 rounded-xl shadow-lg flex items-center justify-center border border-[var(--portfolio-primary)]/20 hover:scale-105 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-[var(--portfolio-primary)]" />
                    </div>

                    {/* CPU */}
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-14 h-14 bg-white/90 rounded-xl shadow-lg flex items-center justify-center border border-[var(--portfolio-primary)]/20 hover:scale-105 transition-transform duration-300">
                      <Cpu className="w-6 h-6 text-[var(--portfolio-primary)]" />
                    </div>

                    <div className="absolute top-20 right-20 w-12 h-12 bg-[var(--portfolio-primary)]/10 rounded-lg shadow-md flex items-center justify-center border border-[var(--portfolio-primary)]/15">
                      <Zap className="w-5 h-5 text-[var(--portfolio-primary)]" />
                    </div>

                    <div className="absolute bottom-20 left-20 w-12 h-12 bg-[var(--portfolio-primary)]/10 rounded-lg shadow-md flex items-center justify-center border border-[var(--portfolio-primary)]/15">
                      <Sparkles className="w-5 h-5 text-[var(--portfolio-primary)]" />
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                    <svg className="w-full h-full opacity-15" viewBox="0 0 384 384">
                      <circle
                        cx="192"
                        cy="192"
                        r="170"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="8,8"
                        className="text-[var(--portfolio-primary)] animate-spin-slow"
                      />
                      <circle
                        cx="192"
                        cy="192"
                        r="130"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="text-[var(--portfolio-primary)]/60 animate-spin-reverse"
                      />
                    </svg>
                  </div>

                  <div
                    className="absolute top-24 left-24 w-2 h-2 bg-[var(--portfolio-primary)]/60 rounded-full animate-float shadow-sm"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute top-36 right-28 w-2 h-2 bg-[var(--portfolio-primary)]/40 rounded-full animate-float shadow-sm"
                    style={{ animationDelay: "1.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-28 left-28 w-1.5 h-1.5 bg-[var(--portfolio-primary)]/70 rounded-full animate-float shadow-sm"
                    style={{ animationDelay: "2.5s" }}
                  ></div>
                  <div
                    className="absolute bottom-24 right-24 w-2 h-2 bg-[var(--portfolio-primary)]/50 rounded-full animate-float shadow-sm"
                    style={{ animationDelay: "3.5s" }}
                  ></div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[var(--portfolio-primary)]/8 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--portfolio-primary)]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[var(--portfolio-primary)] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </main>

      <SkillCard/>
      <TechStack/>
      <Projects/>
      <Timeline/>
      <Contact/>

      </>
  )
}

export default Home