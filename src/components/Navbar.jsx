import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [showNav, setShowNav] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHome) {
            setShowNav(true);
            return;
        }


        const handleScroll = () => {
            setShowNav(true);
            if (scrollTimeout) clearTimeout(scrollTimeout);

            const timeout = setTimeout(() => {
                setShowNav(false);
            }, 1000);

            setScrollTimeout(timeout);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isHome, scrollTimeout]);

    const handleScroll = (id) => () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navContent = (
        <div className="w-full px-4 flex items-center justify-center bg-[#E8E6E0] items-center">

            <Link to="/" className="text-[#343C43] text-xl font-mono tracking-wide px-2 cursor-pointer">
                <img
                    src="/img.png"
                    alt="Logo"
                    className="mt-8 h-8 mb-6 drop-shadow-lg animate-float"
                />
            </Link>
            <span onClick={handleScroll("us")} className="text-[#343C43] text-xl font-mono tracking-wide px-4 cursor-pointer">
                nosotros
            </span>
            <span onClick={handleScroll("services")} className="text-[#343C43] text-xl font-mono tracking-wide px-4 cursor-pointer">
                servicios
            </span>
            <span onClick={handleScroll("contact")} className="text-[#343C43] text-xl font-mono tracking-wide px-4 cursor-pointer">
                contactanos
            </span>
        </div>
    );


    return (
        <nav className="w-full px-4 py-4 flex justify-between items-center bg-[#E8E6E0]">
            {/* Logo */}
            <Link to="/" className="text-[#343C43]">
                <img
                    src="/img.png"
                    alt="Logo"
                    className="h-8 drop-shadow-lg animate-float"
                />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-6">
                <span onClick={handleScroll("us")} className="text-[#343C43] text-xl font-mono cursor-pointer">nosotros</span>
                <span onClick={handleScroll("services")} className="text-[#343C43] text-xl font-mono cursor-pointer">servicios</span>
                <span onClick={handleScroll("contact")} className="text-[#343C43] text-xl font-mono cursor-pointer">contactanos</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg
                        className="w-6 h-6 text-[#343C43]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Fullscreen mobile menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#E8E6E0] flex flex-col items-center justify-center z-50 space-y-8 text-[#343C43]">
                    <Link to="/" className="text-[#343C43]">
                        <img
                            src="/img.png"
                            alt="Logo"
                            className="h-8 drop-shadow-lg animate-float"
                        />
                    </Link>
                    <span onClick={handleScroll("us")} className="text-2xl font-mono cursor-pointer">nosotros</span>
                    <span onClick={handleScroll("services")} className="text-2xl font-mono cursor-pointer">servicios</span>
                    <span onClick={handleScroll("contact")} className="text-2xl font-mono cursor-pointer">contactanos</span>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 text-[#343C43]"
                    >
                        ✕
                    </button>
                </div>
            )}
        </nav>
    );
/*
    if (isHome) {
        return (
            <AnimatePresence>
                {showNav && (
                    <motion.nav
                        initial={{y: -80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed w-full top-0 z-50"
                    >
                        {navContent}
                    </motion.nav>
                )}
            </AnimatePresence>
        );
    }

    return (
        <nav className="shadow-md w-full z-50">
            {navContent}
        </nav>
    );

 */
};

export default Navbar;
