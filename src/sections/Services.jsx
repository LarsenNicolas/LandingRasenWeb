function Services() {
    return (
        <div id="services"
             className="flex flex-col items-center justify-center w-full bg-fixed bg-center bg-cover bg-[#E8E6E0] relative"
             style={{ height: 'calc(100vh - 230px)' }}>

            <h2 className="text-2xl font-bold text-center">Services</h2>
            {/* contenido */}

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
