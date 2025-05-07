'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef1 = useRef(null);
    const paragraphRef2 = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            });

            timeline
                .from(titleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                })
                .from(paragraphRef1.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.4")
                .from(paragraphRef2.current, {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.4")
                .from(buttonRef.current, {
                    scale: 0.9,
                    opacity: 0,
                    duration: 0.5,
                }, "-=0.3");
        }, sectionRef);

        return () => ctx.revert(); // limpia la animación si el componente se desmonta
    }, []);

    return (
        <div
            id="us"
            ref={sectionRef}
            className="flex flex-col items-center justify-center w-full h-screen bg-fixed bg-center bg-cover bg-[#343C43] relative px-6 text-white"
        >
            <h2
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-center mb-6"
            >
                Diseñamos experiencias web inmersivas
            </h2>
            <p
                ref={paragraphRef1}
                className="text-lg md:text-xl text-secondary text-center max-w-3xl mb-4"
            >
                En Rasen Web creamos sitios y plataformas con un enfoque disruptivo y centrado en lo visual.
                Usamos animaciones, 3D y diseño interactivo para que tu marca deje una huella.
            </p>
            <p
                ref={paragraphRef2}
                className="text-base md:text-lg text-gray-300 text-center max-w-2xl"
            >
                Somos una startup con ADN creativo y enfoque técnico.
                Trabajamos con tecnologías de última generación para ofrecer soluciones web únicas, modernas y con impacto real.
            </p>

            <div ref={buttonRef} className="mt-8">
                <a
                    href="/portfolio"
                    className="inline-block bg-secondary text-primary font-semibold py-3 px-6 rounded hover:bg-secondary-hover transition duration-300"
                >
                    Ver nuestro trabajo
                </a>
            </div>

            {/* SVG separador */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                <svg
                    viewBox="0 0 500 50"
                    preserveAspectRatio="none"
                    className="w-full h-[100px]"
                >
                    <path d="M0,0 L500,0 L500,50 Z" fill="#E8E6E0" />
                </svg>
            </div>
        </div>
    );
}

export default AboutUs;
