import {Suspense} from "react";
import StudioModel from "./StudioModel.jsx";
import {Environment, OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

function StudioScene() {
    return (
        <Canvas camera={{position: [0, 0, 4.5], fov: 35}}>
            <Suspense fallback={null}>
                <StudioModel/>
                <Environment preset="studio"/>
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate/>
        </Canvas>
    );
}

export default StudioScene;