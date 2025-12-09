"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls, Text, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function LaptopBase() {
    return (
        <group position={[0, -0.5, 0]}>
            {/* Base Body */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Trackpad */}
            <mesh position={[0, 0.11, 0.6]}>
                <planeGeometry args={[1, 0.6]} />
                <meshStandardMaterial color="#3a3a3a" metalness={0.5} roughness={0.4} />
            </mesh>
        </group>
    );
}

function LaptopScreen() {
    return (
        <group position={[0, 1.5, -1.5]} rotation={[0.2, 0, 0]}>
            {/* Screen Frame */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[3, 2, 0.1]} />
                <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Screen Display (Glowing) */}
            <mesh position={[0, 0, 0.06]}>
                <planeGeometry args={[2.8, 1.8]} />
                <meshStandardMaterial
                    color="#000000"
                    emissive="#001133"
                    emissiveIntensity={2}
                    toneMapped={false}
                />
            </mesh>
            {/* Code on Screen */}
            <Text
                position={[-1.2, 0.6, 0.07]}
                fontSize={0.1}
                color="#00ffff"
                anchorX="left"
                anchorY="top"
                font="https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2"
            >
                {`const future = async () => {
  await disrupt(market);
  return profit;
};`}
            </Text>
        </group>
    );
}

function LaptopKeyboard() {
    // Simple representation of keys floating
    const keys = [];
    const rows = 4;
    const cols = 10;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            keys.push(
                <mesh key={`${i}-${j}`} position={[(j - cols / 2) * 0.25 + 0.125, 0, (i - rows / 2) * 0.25]}>
                    <boxGeometry args={[0.2, 0.05, 0.2]} />
                    <meshStandardMaterial color="#111" metalness={0.5} roughness={0.5} />
                </mesh>
            );
        }
    }

    return (
        <group position={[0, 0.2, -0.2]}>
            {keys}
        </group>
    );
}

function FloatingSymbols() {
    return (
        <>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Text position={[-2, 2, 0]} fontSize={0.5} color="#00f3ff">{`{ }`}</Text>
            </Float>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <Text position={[2, 1, 1]} fontSize={0.4} color="#bc13fe">{`</>`}</Text>
            </Float>
            <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2}>
                <Text position={[-1.5, -1, 2]} fontSize={0.6} color="#ffffff">{`;`}</Text>
            </Float>
            <Float speed={3} rotationIntensity={2} floatIntensity={1}>
                <Text position={[1.8, -0.5, -1]} fontSize={0.3} color="#ff0055">{`npm`}</Text>
            </Float>
        </>
    );
}

export default function DeconstructedLaptop() {
    return (
        <div className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />

                <PresentationControls
                    global

                    snap={true}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                >
                    <Float rotationIntensity={0.4}>
                        <LaptopBase />
                        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                            <LaptopKeyboard />
                        </Float>
                        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                            <LaptopScreen />
                        </Float>
                        <FloatingSymbols />
                    </Float>
                </PresentationControls>

                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
