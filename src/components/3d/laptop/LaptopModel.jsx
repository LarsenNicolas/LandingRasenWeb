import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextureLoader } from 'three'
import { useEffect, useRef } from 'react'

export default function LaptopModel() {
    const gltf = useLoader(GLTFLoader, '/models/mac/scene.gltf')
    const appleLogo = useLoader(TextureLoader, '/models/mac/textures/Apple-logo_baseColor.png')
    const keyBaseColor = useLoader(TextureLoader, '/models/mac/textures/key.002_baseColor.jpeg')
    const screenBaseColor = useLoader(TextureLoader, '/models/mac/textures/screen_baseColor.jpeg')

    const modelRef = useRef()

    useEffect(() => {
        if (!gltf || !gltf.scene) return

        gltf.scene.traverse((child) => {
            if (child.isMesh) {
                child.material.map?.dispose()

                if (child.name.includes('Apple_logo')) {
                    child.material.map = appleLogo
                } else if (child.name.includes('key')) {
                    child.material.map = keyBaseColor
                } else if (child.name.includes('screen')) {
                    child.material.map = screenBaseColor
                }

                child.material.needsUpdate = true
            }
        })
    }, [gltf, appleLogo, keyBaseColor, screenBaseColor])

    return (
            <primitive object={gltf.scene} ref={modelRef} scale={2.3}/>
    )
}
