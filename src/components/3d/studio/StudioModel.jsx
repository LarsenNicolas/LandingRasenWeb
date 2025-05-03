import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function StudioModel() {
    const gltf = useLoader(GLTFLoader, '/models/iphone/gltf.gltf')

    return (
            <primitive object={gltf} scale={1}/>
    )
}
