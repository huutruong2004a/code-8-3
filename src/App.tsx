import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Text, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// --- Particle Morphing Component ---
const MorphingParticles = ({ shapeIndex }: { shapeIndex: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;
  
  const initialPositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  const targets = useMemo(() => {
    const shapes: Float32Array[] = [];
    shapes.push(initialPositions); // 0: Galaxy

    const heartPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const t = Math.random() * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
      heartPos[i * 3] = x * 0.15;
      heartPos[i * 3 + 1] = y * 0.15;
      heartPos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }
    shapes.push(heartPos); // 1: Heart
    return shapes;
  }, [initialPositions]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position;
    const target = (shapeIndex >= 4) ? targets[1] : targets[0];

    for (let i = 0; i < particleCount; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      const z = posAttr.getZ(i);

      posAttr.setXYZ(
        i,
        THREE.MathUtils.lerp(x, target[i * 3], 0.05),
        THREE.MathUtils.lerp(y, target[i * 3 + 1], 0.05),
        THREE.MathUtils.lerp(z, target[i * 3 + 2], 0.05)
      );
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y += 0.002;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={initialPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#ff4d94"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// --- Scene Setup ---
const Scene = ({ shapeIndex }: { shapeIndex: number }) => {
  const getText = () => {
    if (shapeIndex === 1) return "Happy";
    if (shapeIndex === 2) return "Women's Day";
    if (shapeIndex === 3) return "em iu ❤️";
    return "";
  };

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <MorphingParticles shapeIndex={shapeIndex} />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          fontSize={1.5}
          color="#ff4d94"
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
          textAlign="center"
        >
          {getText()}
        </Text>
      </Float>
    </>
  );
};

// --- Main App ---
export default function App() {
  const [phase, setPhase] = useState<'loading' | 'started' | 'final'>('loading');
  const [shapeIndex, setShapeIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (phase === 'loading') {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { clearInterval(interval); return 100; }
          return p + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'started') {
      const timer = setInterval(() => {
        setShapeIndex(prev => {
          if (prev >= 5) {
            clearInterval(timer);
            setTimeout(() => setPhase('final'), 2000);
            return 5;
          }
          return prev + 1;
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [phase]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#050505', position: 'relative' }}>
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div key="loader" className="loading-screen" exit={{ opacity: 0 }}>
            <h2 style={{ color: '#ff4d94', fontSize: '2rem' }}>Gửi lời thương...</h2>
            <div className="loader-bar">
              <div className="loader-fill" style={{ width: `${progress}%` }}></div>
            </div>
            {progress === 100 && (
              <motion.button 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="tap-to-start" 
                onClick={() => setPhase('started')}
                style={{ marginTop: '20px' }}
              >
                Mở món quà này ❤️
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas camera={{ position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <Scene shapeIndex={shapeIndex} />
        </Suspense>
      </Canvas>

      <AnimatePresence>
        {phase === 'final' && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="final-card"
          >
            <h2 className="card-title">Gửi em,</h2>
            <p>
              Anh viết những dòng này trong một ngày đặc biệt, mong rằng nụ cười của em sẽ mãi tươi rạng rỡ. Cảm ơn em đã xuất hiện và làm cho thế giới của anh trở nên rực rỡ hơn bao giờ hết.
            </p>
            <p style={{ fontWeight: 'bold' }}>Yêu em thật nhiều!</p>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3233/3233514.png" 
              alt="Bouquet" 
              style={{ width: '120px', marginTop: '15px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
