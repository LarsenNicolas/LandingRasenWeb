'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            title: 'Landing Page',
            short: 'Sitio de una sola página moderno y enfocado en conversión.',
            long: 'Ideal para campañas o productos puntuales. Incluye diseño responsive, animaciones, optimización SEO, velocidad de carga y formulario de contacto.',
        },
        {
            title: 'E-commerce',
            short: 'Venta online personalizada según tus necesidades.',
            long: (
                <div className="space-y-3">
                    <div>
                        <strong>Básico:</strong> Catálogo + carrito. Perfecto para comenzar.
                    </div>
                    <div>
                        <strong>Completo:</strong> Stock, pagos integrados, dashboard de gestión, emails automáticos.
                    </div>
                    <div>
                        <strong>3D:</strong> Visualización interactiva del producto. Ideal para tecnología, muebles o calzado.
                    </div>
                </div>
            ),
        },
        {
            title: 'Software a Medida',
            short: 'Aplicaciones web creadas a tu medida.',
            long: 'Creamos plataformas específicas para tu negocio: sistemas internos, dashboards, automatizaciones, integraciones con APIs, control de datos, etc.',
        },
    ];

    return (
        <div
            id="services"
            ref={sectionRef}
            className="flex flex-col items-center justify-center w-full bg-[#E8E6E0] relative px-6 py-10"
            style={{ minHeight: 'calc(100vh - 230px)' }}
        >
            <h2 className="text-4xl font-bold text-center text-[#343C43] mb-16">
                Nuestros Servicios
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
                {services.map((service, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className={`bg-white p-6 rounded-2xl shadow-xl text-[#343C43] border border-gray-300 cursor-pointer transition-all duration-500 hover:scale-[1.03]`}
                        >
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-gray-700">{service.short}</p>

                            <div
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="text-sm text-gray-700">{service.long}</div>
                            </div>

                            <p className="mt-4 text-sm text-blue-500 font-medium">
                                {isExpanded ? 'Haz clic para contraer' : 'Haz clic para ver más'}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* SVG separador en diagonal */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    className="w-full h-[100px]"
                >
                    <path d="M0,0 L500,0 L500,50 Z" fill="#343C43" />
                </svg>
            </div>
        </div>
    );
}

export default Services;
