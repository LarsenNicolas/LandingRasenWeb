'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (id: string) => () => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="px-6 lg:px-12 h-20 flex items-center backdrop-blur-md bg-white/90 border-b border-slate-100 sticky top-0 z-50">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center group">
                <div className="transition-all duration-500 group-hover:scale-105">
                    <Image src="/logo.png" alt="RASEN WEB" width={140} height={45} className="h-10 w-auto" />
                </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex ml-auto gap-10">
                {[
                    { label: 'Servicios', href: '#servicios' },
                    { label: 'Portfolio', href: '#portfolio' },
                    { label: 'Contacto', href: '#contacto' },
                ].map(({ label, href }) => (
                    <a
                        key={href}
                        href={href}
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-all duration-300 relative group"
                    >
                        {label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </nav>

            {/* Mobile menu button */}
            <div className="ml-auto md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    <svg
                        className="w-6 h-6 text-slate-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white border-t border-slate-200 shadow-md flex flex-col items-center py-6 z-40 md:hidden">
                    {[
                        { label: 'Servicios', id: 'servicios' },
                        { label: 'Portfolio', id: 'portfolio' },
                        { label: 'Contacto', id: 'contacto' },
                    ].map(({ label, id }) => (
                        <button
                            key={id}
                            onClick={handleScrollTo(id)}
                            className="py-2 text-base text-slate-700 hover:text-teal-600 transition"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
