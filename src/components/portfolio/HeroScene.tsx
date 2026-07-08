import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Blob({ position, color, speed = 0.3, distort = 0.45, scale = 1 }: { position: [number, number, number]; color: string; speed?: number; distort?: number; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * speed;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <Sphere ref={ref} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial color={color} distort={distort} speed={1.6} roughness={0.15} metalness={0.35} />
      </Sphere>
    </Float>
  );
}

function Knot() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.25;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[0.9, 0.28, 180, 32]} position={[2.2, -0.6, -1]}>
        <meshStandardMaterial color="#22d3ee" wireframe metalness={0.6} roughness={0.2} />
      </TorusKnot>
    </Float>
  );
}

function Ico() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.6}>
      <Icosahedron ref={ref} args={[0.6, 0]} position={[-2.6, 1.2, -0.5]}>
        <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.15} />
      </Icosahedron>
    </Float>
  );
}

function Particles({ count = 350 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.03;
    const mx = s.pointer.x;
    const my = s.pointer.y;
    ref.current.rotation.x = my * 0.15;
    ref.current.position.x = mx * 0.3;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#7dd3fc" transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
          <pointLight position={[-4, -2, -3]} intensity={2} color="#a78bfa" />
          <Blob position={[0, 0, 0]} color="#0891b2" scale={1.6} />
          <Blob position={[-1.4, -1.2, 1.2]} color="#7c3aed" speed={0.4} distort={0.55} scale={0.6} />
          <Knot />
          <Ico />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}
