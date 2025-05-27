import '@google/model-viewer'

const ModelViewer = () => {
    return (
        <div className="w-full h-full">
            <model-viewer
                className="w-full h-full"
                alt="Vista 3D del producto"
                src="/kitchen-faucet.glb"
                ar="none"
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
            ></model-viewer>
        </div>
    )
}

export default ModelViewer
