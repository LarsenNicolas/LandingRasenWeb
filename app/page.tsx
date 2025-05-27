import { Button } from "@/components/ui/button"
import { Code, CuboidIcon as Cube, Eye, Zap, Shield, Users, ArrowRight, ChevronDown, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Scene from "@/modelViewer/scene";
import Navbar from "@/components/navbar";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden font-mono">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric elements */}
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-slate-400 rounded-full opacity-30 animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-50 animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-300 rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>

        {/* Subtle moving lines */}
        <div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-20 animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-15 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      {/* Header */}
      <Navbar />

      <main className="flex-1 relative">
        {/* Hero Section with 3D Model Space */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Complex closure patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Incomplete hexagonal pattern */}
            <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
              <div className="absolute inset-0 border-l-2 border-t-2 border-slate-300 transform rotate-60"></div>
              <div className="absolute inset-0 border-r-2 border-b-2 border-teal-300 transform -rotate-60"></div>
              <div className="absolute inset-0 border-t-2 border-b-2 border-slate-300"></div>
            </div>

            {/* Incomplete circles with animated rotation */}
            <div
              className="absolute top-20 right-20 w-96 h-96 border border-slate-200 rounded-full opacity-20 animate-spin"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(20, 184, 166, 0.1) 270deg, rgba(20, 184, 166, 0.1) 360deg)`,
                animationDuration: "30s",
              }}
            ></div>
            <div
              className="absolute bottom-20 left-20 w-80 h-80 border border-teal-200 rounded-full opacity-15 animate-spin"
              style={{
                background: `conic-gradient(from 90deg, transparent 0deg, transparent 180deg, rgba(71, 85, 105, 0.1) 180deg, rgba(71, 85, 105, 0.1) 360deg)`,
                animationDuration: "40s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Dotted connection lines that animate */}
            <div className="absolute top-1/2 left-0 w-full h-px opacity-30">
              <div
                className="w-full h-full bg-gradient-to-r from-transparent via-slate-300 to-transparent animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
            <div className="absolute top-0 left-1/2 w-px h-full opacity-20">
              <div
                className="w-full h-full bg-gradient-to-b from-transparent via-teal-300 to-transparent animate-pulse"
                style={{ animationDuration: "6s" }}
              ></div>
            </div>

            {/* Incomplete grid with gaps - stronger closure effect */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-12 h-full p-12">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className={`${i % 3 === 0 ? "opacity-0" : ""} border border-slate-300 rounded-sm`}></div>
                ))}
              </div>
            </div>

            {/* Incomplete triangular patterns */}
            <div className="absolute bottom-40 right-40 w-24 h-24 opacity-15">
              <div className="absolute inset-0 border-l-2 border-slate-300 transform rotate-45"></div>
              <div className="absolute inset-0 border-r-2 border-teal-300 transform -rotate-45"></div>
            </div>
          </div>

          <div className="container px-8 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left content */}
              <div className="space-y-12">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-200 relative">
                    {/* Incomplete border effect */}
                    <div className="absolute inset-0 border-l-2 border-t-2 border-teal-200 rounded-full opacity-50"></div>
                    <div className="absolute inset-0 border-r-2 border-b-2 border-slate-200 rounded-full opacity-50"></div>
                    <div className="w-2 h-2 bg-teal-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-slate-700">Innovación Digital</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 leading-tight">
                    RASEN
                    <span className="block text-teal-600 font-normal relative">
                      WEB
                      {/* Incomplete underline that suggests completion */}
                      <div className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gradient-to-r from-teal-600 to-transparent"></div>
                    </span>
                  </h1>

                  <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                    Creamos experiencias digitales sofisticadas que transforman ideas en realidades tecnológicas
                    mediante desarrollo de software, visualizaciones 3D y realidad aumentada.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    size="lg"
                    className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    {/* Incomplete highlight effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    Iniciar Proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-slate-600 hover:text-slate-900 px-8 py-4 rounded-full transition-all duration-300 hover:bg-slate-50 relative"
                  >
                    {/* Incomplete border on hover */}
                    <div className="absolute inset-0 border-l-2 border-t-2 border-transparent hover:border-slate-200 rounded-full transition-all duration-300"></div>
                    <div className="absolute inset-0 border-r-2 border-b-2 border-transparent hover:border-teal-200 rounded-full transition-all duration-300"></div>
                    Explorar Trabajo
                  </Button>
                </div>

                <div className="pt-12">
                  <ChevronDown className="w-6 h-6 text-slate-400 mx-auto animate-bounce" />
                </div>
              </div>

              {/* Right side - 3D Model Space */}
              <div className="relative">
                {/* Complex geometric frame using closure */}
                <div className="absolute -inset-8">
                  {/* Corner elements that suggest a complete frame */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-slate-300 rounded-tl-3xl"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-teal-300 rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-teal-300 rounded-bl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-slate-300 rounded-br-3xl"></div>

                  {/* Incomplete side lines */}
                  <div className="absolute top-16 left-0 w-0.5 h-1/3 bg-gradient-to-b from-slate-300 to-transparent"></div>
                  <div className="absolute bottom-16 left-0 w-0.5 h-1/3 bg-gradient-to-t from-teal-300 to-transparent"></div>
                  <div className="absolute top-16 right-0 w-0.5 h-1/3 bg-gradient-to-b from-teal-300 to-transparent"></div>
                  <div className="absolute bottom-16 right-0 w-0.5 h-1/3 bg-gradient-to-t from-slate-300 to-transparent"></div>

                  <div className="absolute top-0 left-16 h-0.5 w-1/3 bg-gradient-to-r from-slate-300 to-transparent"></div>
                  <div className="absolute top-0 right-16 h-0.5 w-1/3 bg-gradient-to-l from-teal-300 to-transparent"></div>
                  <div className="absolute bottom-0 left-16 h-0.5 w-1/3 bg-gradient-to-r from-teal-300 to-transparent"></div>
                  <div className="absolute bottom-0 right-16 h-0.5 w-1/3 bg-gradient-to-l from-slate-300 to-transparent"></div>
                </div>

                {/* 3D Model Container */}
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 aspect-square flex items-center justify-center group">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute top-1/4 left-1/4 w-8 h-8 border border-teal-400 rounded-full animate-spin"
                      style={{ animationDuration: "20s" }}
                    ></div>
                    <div
                      className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-slate-400 rounded-full animate-spin"
                      style={{ animationDuration: "15s", animationDirection: "reverse" }}
                    ></div>
                  </div>

                  {/* Placeholder for 3D Model */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* This is where the GLB model would be loaded */}
                    <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-teal-50"></div>
                      <div className="relative z-10 text-center space-y-4 h-full w-full">
                        <Scene />
                      </div>

                      {/* Incomplete overlay pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-slate-400"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-teal-400"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-teal-400"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-slate-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with enhanced closure */}
        <section id="servicios" className="flex items-center justify-center py-32 bg-slate-50 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50 animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-50 animate-pulse"
              style={{ animationDuration: "10s" }}
            ></div>

            {/* Floating incomplete shapes */}
            <div
              className="absolute top-20 left-20 w-16 h-16 opacity-10 animate-pulse"
              style={{ animationDuration: "12s" }}
            >
              <div className="absolute inset-0 border-l-2 border-t-2 border-slate-300 rounded-tl-full"></div>
              <div className="absolute inset-0 border-r-2 border-b-2 border-teal-300 rounded-br-full"></div>
            </div>
          </div>

          <div className="container px-8 md:px-12 relative">
            <div className="mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 relative">
                Servicios especializados
                {/* Incomplete accent line */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-600 to-transparent"></div>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Soluciones tecnológicas de vanguardia diseñadas con precisión y ejecutadas con excelencia
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Service 1 - Enhanced closure effects */}
              <div className="group relative">
                {/* Multiple incomplete border layers */}
                <div className="absolute -inset-2 border-l-2 border-t-2 border-slate-200 rounded-tl-3xl transition-all duration-500 group-hover:border-slate-900 opacity-50"></div>
                <div className="absolute -inset-1 border-r-2 border-b-2 border-teal-200 rounded-br-3xl transition-all duration-500 group-hover:border-teal-600 opacity-70"></div>
                <div className="absolute inset-1 border-l border-t border-slate-100 rounded-tl-3xl transition-all duration-500 group-hover:border-slate-300 opacity-30"></div>

                <div className="relative p-12 bg-white rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  {/* Incomplete corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-slate-200 group-hover:border-slate-900 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-teal-200 group-hover:border-teal-600 transition-all duration-300"></div>

                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-all duration-300 relative overflow-hidden">
                    {/* Animated highlight */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Code className="w-8 h-8 text-slate-600 group-hover:text-white transition-all duration-300 relative z-10" />
                  </div>

                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Desarrollo de Software</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Arquitecturas robustas y escalables que impulsan el crecimiento empresarial
                  </p>

                  <div className="space-y-3">
                    {["Aplicaciones web modernas", "Desarrollo móvil nativo", "APIs y microservicios"].map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group relative">
                <div className="absolute -inset-2 border-l-2 border-t-2 border-teal-200 rounded-tl-3xl transition-all duration-500 group-hover:border-teal-600 opacity-50"></div>
                <div className="absolute -inset-1 border-r-2 border-b-2 border-slate-200 rounded-br-3xl transition-all duration-500 group-hover:border-slate-900 opacity-70"></div>
                <div className="absolute inset-1 border-l border-t border-teal-100 rounded-tl-3xl transition-all duration-500 group-hover:border-teal-300 opacity-30"></div>

                <div className="relative p-12 bg-white rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-teal-200 group-hover:border-teal-600 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-slate-200 group-hover:border-slate-900 transition-all duration-300"></div>

                  <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-600 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Cube className="w-8 h-8 text-teal-600 group-hover:text-white transition-all duration-300 relative z-10" />
                  </div>

                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Experiencias 3D</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Visualizaciones inmersivas que transforman la interacción digital
                  </p>

                  <div className="space-y-3">
                    {["Modelado 3D interactivo", "Configuradores de productos", "Tours virtuales"].map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group relative">
                <div className="absolute -inset-2 border-l-2 border-t-2 border-slate-200 rounded-tl-3xl transition-all duration-500 group-hover:border-slate-900 opacity-50"></div>
                <div className="absolute -inset-1 border-r-2 border-b-2 border-teal-200 rounded-br-3xl transition-all duration-500 group-hover:border-teal-600 opacity-70"></div>
                <div className="absolute inset-1 border-l border-t border-slate-100 rounded-tl-3xl transition-all duration-500 group-hover:border-slate-300 opacity-30"></div>

                <div className="relative p-12 bg-white rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-slate-200 group-hover:border-slate-900 transition-all duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-teal-200 group-hover:border-teal-600 transition-all duration-300"></div>

                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Eye className="w-8 h-8 text-slate-600 group-hover:text-white transition-all duration-300 relative z-10" />
                  </div>

                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Realidad Aumentada</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">Fusión perfecta entre el mundo físico y digital</p>

                  <div className="space-y-3">
                    {["Aplicaciones AR móviles", "Filtros personalizados", "Marketing interactivo"].map(
                      (item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full"></div>
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-white flex items-center justify-center relative">
          {/* Subtle animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5 animate-spin"
              style={{ animationDuration: "25s" }}
            >
              <div className="absolute inset-0 border-l-2 border-t-2 border-slate-300 rounded-tl-full"></div>
              <div className="absolute inset-0 border-r-2 border-b-2 border-teal-300 rounded-br-full"></div>
            </div>
          </div>

          <div className="container px-8 md:px-12 relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
                    Excelencia en cada
                    <span className="block text-teal-600 relative">
                      detalle
                      {/* Multiple incomplete underlines */}
                      <div className="absolute -bottom-2 left-0 w-2/3 h-0.5 bg-gradient-to-r from-teal-600 to-transparent"></div>
                      <div className="absolute -bottom-1 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50"></div>
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Combinamos metodología rigurosa con creatividad visionaria para entregar soluciones que superan
                    expectativas.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: Zap,
                      title: "Metodología Ágil",
                      desc: "Desarrollo iterativo que garantiza entregas puntuales y calidad excepcional",
                      color: "slate",
                    },
                    {
                      icon: Shield,
                      title: "Seguridad Integral",
                      desc: "Protocolos de seguridad de nivel empresarial en cada línea de código",
                      color: "teal",
                    },
                    {
                      icon: Users,
                      title: "Soporte Dedicado",
                      desc: "Acompañamiento continuo con un equipo especializado disponible 24/7",
                      color: "slate",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div
                        className={`flex-shrink-0 w-12 h-12 ${feature.color === "slate" ? "bg-slate-50" : "bg-teal-50"} rounded-xl flex items-center justify-center group-hover:${feature.color === "slate" ? "bg-slate-900" : "bg-teal-600"} transition-all duration-300 relative`}
                      >
                        {/* Incomplete corner highlights */}
                        <div
                          className={`absolute top-1 left-1 w-3 h-3 border-l border-t ${feature.color === "slate" ? "border-slate-200" : "border-teal-200"} group-hover:border-white transition-all duration-300`}
                        ></div>
                        <div
                          className={`absolute bottom-1 right-1 w-3 h-3 border-r border-b ${feature.color === "slate" ? "border-slate-200" : "border-teal-200"} group-hover:border-white transition-all duration-300`}
                        ></div>
                        <feature.icon
                          className={`w-6 h-6 ${feature.color === "slate" ? "text-slate-600" : "text-teal-600"} group-hover:text-white transition-all duration-300`}
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium text-slate-900">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Enhanced geometric frame with closure */}
                <div className="absolute -inset-6">
                  {/* Corner elements with multiple layers */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-slate-200 rounded-tl-2xl"></div>
                  <div className="absolute top-2 left-2 w-16 h-16 border-l border-t border-slate-300 rounded-tl-2xl opacity-50"></div>

                  <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-teal-200 rounded-tr-2xl"></div>
                  <div className="absolute top-2 right-2 w-16 h-16 border-r border-t border-teal-300 rounded-tr-2xl opacity-50"></div>

                  <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-teal-200 rounded-bl-2xl"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 border-l border-b border-teal-300 rounded-bl-2xl opacity-50"></div>

                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-slate-200 rounded-br-2xl"></div>
                  <div className="absolute bottom-2 right-2 w-16 h-16 border-r border-b border-slate-300 rounded-br-2xl opacity-50"></div>
                </div>

                <div className="relative bg-slate-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    width="400"
                    height="400"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section
        <section id="portfolio" className="py-32 bg-slate-50 relative flex items-center justify-center">

          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute top-20 left-1/3 w-24 h-24 opacity-5 animate-pulse"
              style={{ animationDuration: "15s" }}
            >
              <div className="absolute inset-0 border-l-2 border-t-2 border-slate-300 transform rotate-45"></div>
              <div className="absolute inset-0 border-r-2 border-b-2 border-teal-300 transform -rotate-45"></div>
            </div>
          </div>

          <div className="container px-8 md:px-12 relative">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 relative">
                Casos de estudio
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-600 to-transparent"></div>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Proyectos que demuestran nuestra capacidad de transformar visiones en realidades digitales
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                {
                  title: "Plataforma E-commerce 3D",
                  description: "Experiencia de compra inmersiva con visualización tridimensional",
                  category: "Web 3D",
                  color: "slate",
                },
                {
                  title: "Aplicación AR Inmobiliaria",
                  description: "Visualización de propiedades mediante realidad aumentada",
                  category: "AR",
                  color: "teal",
                },
                {
                  title: "Sistema de Gestión Empresarial",
                  description: "Dashboard inteligente con analytics en tiempo real",
                  category: "Software",
                  color: "slate",
                },
                {
                  title: "Configurador 3D Automotriz",
                  description: "Personalización interactiva de vehículos en tiempo real",
                  category: "3D/VR",
                  color: "teal",
                },
              ].map((project, index) => (
                <div key={index} className="group relative">

                  <div
                    className={`absolute -inset-2 border-l-2 border-t-2 ${project.color === "slate" ? "border-slate-200" : "border-teal-200"} rounded-tl-3xl transition-all duration-500 group-hover:${project.color === "slate" ? "border-slate-900" : "border-teal-600"} opacity-60`}
                  ></div>
                  <div
                    className={`absolute -inset-1 border-r-2 border-b-2 ${project.color === "slate" ? "border-teal-200" : "border-slate-200"} rounded-br-3xl transition-all duration-500 group-hover:${project.color === "slate" ? "border-teal-600" : "border-slate-900"} opacity-80`}
                  ></div>
                  <div
                    className={`absolute inset-1 border-l border-t ${project.color === "slate" ? "border-slate-100" : "border-teal-100"} rounded-tl-3xl transition-all duration-500 opacity-40`}
                  ></div>

                  <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        width="500"
                        height="300"
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge
                          className={`${project.color === "slate" ? "bg-slate-900" : "bg-teal-600"} text-white relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          <span className="relative z-10">{project.category}</span>
                        </Badge>
                      </div>


                      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-8 relative">

                      <div className="absolute top-0 left-8 w-12 h-0.5 bg-gradient-to-r from-teal-600 to-transparent opacity-50"></div>
                      <h3 className="text-xl font-medium text-slate-900 mb-3">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        */}

        {/* CTA Section */}
        <section id="contacto" className="py-32 bg-slate-900 relative overflow-hidden flex items-center justify-center">
          {/* Enhanced animated background */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/10 rounded-full animate-spin"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(255, 255, 255, 0.05) 300deg, rgba(255, 255, 255, 0.05) 360deg)`,
                animationDuration: "35s",
              }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-white/5 rounded-full animate-spin"
              style={{
                background: `conic-gradient(from 180deg, transparent 0deg, transparent 240deg, rgba(20, 184, 166, 0.1) 240deg, rgba(20, 184, 166, 0.1) 360deg)`,
                animationDuration: "45s",
                animationDirection: "reverse",
              }}
            ></div>

            {/* Floating elements */}
            <div
              className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-40 right-40 w-1 h-1 bg-teal-400/40 rounded-full animate-bounce"
              style={{ animationDuration: "6s" }}
            ></div>
          </div>

          <div className="container px-8 md:px-12 relative">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                  Construyamos el futuro
                  <span className="block text-teal-400 relative">
                    juntos
                    {/* Incomplete underline with glow */}
                    <div className="absolute -bottom-2 left-0 w-3/4 h-0.5 bg-gradient-to-r from-teal-400 to-transparent shadow-lg shadow-teal-400/50"></div>
                  </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Transforme su visión en una realidad digital extraordinaria. Conversemos sobre su próximo proyecto.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-200 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10">Iniciar Conversación</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full transition-all duration-300 relative"
                >
                  <div className="absolute inset-0 border-l-2 border-t-2 border-transparent hover:border-white/20 rounded-full transition-all duration-300"></div>
                  <div className="absolute inset-0 border-r-2 border-b-2 border-transparent hover:border-teal-400/20 rounded-full transition-all duration-300"></div>
                  <span className="relative z-10">Ver Más Proyectos</span>
                </Button>
              </div>

              <div className="pt-8">
                <p className="text-sm text-slate-400">Respuesta garantizada en menos de 24 horas</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 relative flex items-center justify-center">
        {/* Subtle incomplete border pattern */}
        <div className="absolute top-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>

        <div className="container px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500">© 2024 RASEN WEB. Todos los derechos reservados.</p>
            <nav className="flex gap-8">
              {["Términos", "Privacidad", "Contacto"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
