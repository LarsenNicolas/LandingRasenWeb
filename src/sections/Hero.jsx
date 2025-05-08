import LaptopScene from "../components/3d/laptop/LaptopScene.jsx";
import {useTypewriter} from "../utils/useTypewriter.js";

function Hero() {
    const slogan = useTypewriter("Desarrollamos software de alta calidad a tu medida ...", 60);

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-fixed bg-center bg-cover bg-[#E8E6E0]">
            <div className="z-10 flex flex-col md:flex-row items-center justify-center h-52">
                <div className="flex flex-col sm:text-left text-center mb-10">
                    <img
                        src="/img.png"
                        alt="Logo"
                        className="h-22 sm:h-42"
                    />
                </div>
                <div className="h-92 sm:h-92 drop-shadow-lg animate-float">
                    <LaptopScene/>
                </div>
            </div>
            <div>
                <p className="text-2xl pt-20 p-8 text-[#343C43] font-light min-h-[3rem] text-center">
                    {slogan}
                    <span className="border-r-2 border-white animate-pulse ml-1"/>
                </p>
            </div>
        </div>
    )
}

export default Hero;
