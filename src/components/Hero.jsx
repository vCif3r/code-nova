import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import HeroImg from "../assets/hero.svg";

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-16 lg:px-8 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(42, 130, 246, 0.15), transparent 40%)`,
                }}
            />

            <div className="absolute top-20 left-4 sm:left-10 w-40 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 sm:right-52 w-[450px] sm:w-[480px] h-[450px] sm:h-[480px] bg-purple-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">

                    <div>
                        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-4 sm:mb-6 ">
                            <Sparkles className="fill-white/70"/>
                            <span>Bienvenido</span>
                        </div>

                        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            <span className="bg-linear-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent block mb-1  sm:mb-2">Aprende a programar</span>
                            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent block mb-1  sm:mb-2">desde cero</span>
                            <span className="bg-linear-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent block mb-1  sm:mb-2">transforma tu futuro</span>
                        </h1>
                        <p className="text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                            Explora conceptos esenciales, practica con ejercicios reales y adquiere habilidades aplicables desde el primer proyecto.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-b from-indigo-600 to-indigo-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex justify-center items-center space-x-2">
                                <span>Únete a nosotros</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex justify-center items-center space-x-2">
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors">
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                                </div>
                                <span>Mira nuestro tutorial</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative order-2 w-full opacity-50">
                        <img src={HeroImg} alt="Hero" 
                        className="w-full h-auto max-w-lg mx-auto animate-in zoom-in duration-700 delay-400 animate-in slide-in-from-bottom" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
