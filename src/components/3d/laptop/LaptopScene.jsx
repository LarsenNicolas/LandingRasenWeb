import {Suspense} from "react";
import LaptopModel from "./LaptopModel.jsx";
import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

function LaptopScene() {
    return (
        <Canvas camera={{position: [0, 5, 4.5], fov: 35}}>
            <Suspense fallback={null}>
                <LaptopModel/>
                <Environment preset="studio"/>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate/>
        </Canvas>
    );
}

export default LaptopScene;