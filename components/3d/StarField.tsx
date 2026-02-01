"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";

const StarBackground = (props: any) => {
    const ref: any = useRef(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(1500), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default function ThreeHero() {
    return (
        <div className="w-full h-screen fixed inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    );
}
