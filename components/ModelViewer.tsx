"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";

function Model({ src }: { src: string }) {
  const { scene } = useGLTF(src);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export default function ModelViewer({ src, margin = 1.2 }: { src: string; margin?: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <color attach="background" args={["#141414"]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, 2, -5]} intensity={0.4} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={margin}>
          <Model src={src} />
        </Bounds>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom
        zoomSpeed={0.6}
        minDistance={1.5}
        maxDistance={12}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        makeDefault
      />
    </Canvas>
  );
}
