import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Stars, Float, PerspectiveCamera, Html, Line } from '@react-three/drei';

const MARKERS = [
  { id: 1, pos: [1.2, 1.5, 0.5], name: 'Fall of Rome', year: '476 AD', type: 'empire' },
  { id: 2, pos: [-1.5, 0.8, 1.2], name: 'Napoleon Conquest', year: '1804 AD', type: 'war' },
  { id: 3, pos: [0.5, -1.2, 1.5], name: 'Mongol Expansion', year: '1206 AD', type: 'empire' },
  { id: 4, pos: [-0.8, -1.5, -0.5], name: 'Punic Wars', year: '264 BC', type: 'war' },
];

const CONNECTIONS = [
  { start: [1.2, 1.5, 0.5], end: [-1.5, 0.8, 1.2], color: '#8B0000' },
  { start: [0.5, -1.2, 1.5], end: [-0.8, -1.5, -0.5], color: '#8B0000' },
];

function Marker({ position, name, year, onSelect }: { position: [number, number, number], name: string, year: string, onSelect: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={onSelect}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? "#8B0000" : "#D4AF37"}
          emissive={hovered ? "#8B0000" : "#D4AF37"}
          emissiveIntensity={2}
        />
      </mesh>
      {hovered && (
        <Html distanceFactor={10}>
          <div className="glass-gold p-2 border border-gold/30 whitespace-nowrap pointer-events-none">
            <p className="font-cinzel text-[8px] text-gold">{year}</p>
            <p className="font-cinzel text-[10px] font-bold text-white uppercase tracking-tighter">{name}</p>
          </div>
        </Html>
      )}
      <pointLight color="#D4AF37" intensity={0.5} distance={1} />
    </group>
  );
}

function Globe({ onMarkerSelect }: { onMarkerSelect: (marker: any) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.0005;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0008;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 128, 128]} />
        <meshStandardMaterial
          color="#050505"
          roughness={0.7}
          metalness={0.9}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshStandardMaterial
          color="#D4AF37"
          transparent
          opacity={0.05}
          wireframe
        />
      </mesh>

      {MARKERS.map((m) => (
        <Marker
          key={m.id}
          position={m.pos as [number, number, number]}
          name={m.name}
          year={m.year}
          onSelect={() => onMarkerSelect(m)}
        />
      ))}

      {CONNECTIONS.map((c, i) => (
        <Line
          key={i}
          points={[c.start, c.end] as [[number, number, number], [number, number, number]]}
          color={c.color}
          lineWidth={1}
          dashed
          dashSize={0.1}
          gapSize={0.05}
        />
      ))}
    </group>
  );
}

function Atmosphere() {
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#D4AF37"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

const GlobeScene = ({ onMarkerSelect }: { onMarkerSelect?: (marker: any) => void }) => {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} color="#8B0000" intensity={0.5} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <Globe onMarkerSelect={onMarkerSelect || (() => {})} />
        </Float>

        <Atmosphere />

        <fog attach="fog" args={['#000', 5, 15] as any} />
      </Canvas>
    </div>
  );
};

export default GlobeScene;
