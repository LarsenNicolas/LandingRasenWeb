"use client"

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("@/modelViewer/ModelViewer"), {
    loading: () => <p>Loading...</p>,
    ssr: false
})

export default function Scene() {
    return <ModelViewer />
}