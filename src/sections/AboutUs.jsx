function AboutUs() {
    return (
        <div id="us"
             className="flex flex-col items-center justify-center w-full h-screen bg-fixed bg-center bg-cover bg-[#343C43] relative">

            <h2 className="text-2xl font-bold text-center">About us</h2>
            {/* contenido */}

            {/* SVG separador en diagonal */}
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
