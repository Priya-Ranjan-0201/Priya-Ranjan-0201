'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useSettingsStore } from '@/stores/settings-store';
import { useMousePosition, useDeviceCapability } from '@/hooks';
import * as THREE from 'three';

// ── 01. Living Computational Core Structure ──────────────────

function LivingComputationalCore() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const corePolyRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);

  const mouse = useMousePosition();
  const coreState = useSettingsStore((s) => s.coreState);
  const motionLevel = useSettingsStore((s) => s.motion);
  const theme = useSettingsStore((s) => s.theme);

  const nodeCount = 240;
  const maxConnections = 180;

  // Base state positions for morphing
  const { initialPositions, targetPositions, linePositions, lineColors, colors } = useMemo(() => {
    const pos = new Float32Array(nodeCount * 3);
    const targetPos = new Float32Array(nodeCount * 3);
    const cols = new Float32Array(nodeCount * 3);
    const lPos = new Float32Array(maxConnections * 6);
    const lCols = new Float32Array(maxConnections * 6);

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.4 + Math.random() * 1.6;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      targetPos[i * 3] = x;
      targetPos[i * 3 + 1] = y;
      targetPos[i * 3 + 2] = z;

      // Primary cyan & warm gold stellar particles
      const isAccent = Math.random() > 0.4;
      if (isAccent) {
        cols[i * 3] = 0.0;
        cols[i * 3 + 1] = 0.94;
        cols[i * 3 + 2] = 1.0;
      } else {
        cols[i * 3] = 1.0;
        cols[i * 3 + 1] = 0.88;
        cols[i * 3 + 2] = 0.72;
      }
    }

    // Initialize line color buffer
    for (let j = 0; j < maxConnections * 2; j++) {
      lCols[j * 3] = 0.0;
      lCols[j * 3 + 1] = 0.94;
      lCols[j * 3 + 2] = 1.0;
    }

    return {
      initialPositions: pos,
      targetPositions: targetPos,
      linePositions: lPos,
      lineColors: lCols,
      colors: cols,
    };
  }, []);

  // Update target coordinates based on CoreState
  useEffect(() => {
    for (let i = 0; i < nodeCount; i++) {
      const idx = i * 3;
      const progress = i / nodeCount;
      const angle = progress * Math.PI * 4;

      if (coreState === 'neural') {
        // Calm centered breathing sphere with subtle planar bias
        const r = 1.6 + 0.8 * Math.sin(angle * 3);
        targetPositions[idx] = r * Math.cos(angle);
        targetPositions[idx + 1] = r * Math.sin(angle) * 0.75;
        targetPositions[idx + 2] = (Math.random() - 0.5) * 1.8;
      } else if (coreState === 'orbit') {
        // Organic undulating torus manifold (Mind)
        const R = 2.2;
        const r = 0.7;
        targetPositions[idx] = (R + r * Math.cos(angle * 5)) * Math.cos(angle);
        targetPositions[idx + 1] = r * Math.sin(angle * 5) * 1.3;
        targetPositions[idx + 2] = (R + r * Math.cos(angle * 5)) * Math.sin(angle);
      } else if (coreState === 'nodes') {
        // Structured fragmented data crystals (Archive)
        const row = i % 8;
        const col = Math.floor(i / 8) % 6;
        const layer = Math.floor(i / 48);
        targetPositions[idx] = (row - 3.5) * 0.7;
        targetPositions[idx + 1] = (col - 2.5) * 0.7;
        targetPositions[idx + 2] = (layer - 2) * 0.8 + (Math.random() - 0.5) * 0.4;
      } else if (coreState === 'network') {
        // Radial star constellation with 5 major domain nodes
        const cluster = i % 5;
        const clusterAngle = (cluster / 5) * Math.PI * 2;
        const clusterR = 2.0;
        const spread = 0.65;
        targetPositions[idx] = clusterR * Math.cos(clusterAngle) + (Math.random() - 0.5) * spread;
        targetPositions[idx + 1] = clusterR * Math.sin(clusterAngle) + (Math.random() - 0.5) * spread;
        targetPositions[idx + 2] = (Math.random() - 0.5) * 1.2;
      } else if (coreState === 'journey') {
        // Directional orbital trajectory curve across space
        const t = progress * 6 - 3;
        targetPositions[idx] = t * 1.1;
        targetPositions[idx + 1] = Math.sin(t * 1.5) * 1.2;
        targetPositions[idx + 2] = Math.cos(t * 1.2) * 1.0;
      } else if (coreState === 'chaos') {
        // Turbulent chaotic reactive cloud
        targetPositions[idx] = (Math.random() - 0.5) * 4.5;
        targetPositions[idx + 1] = (Math.random() - 0.5) * 4.5;
        targetPositions[idx + 2] = (Math.random() - 0.5) * 3.5;
      } else if (coreState === 'convergence') {
        // Singular converging singularity pull
        const pull = 0.4 + Math.random() * 0.5;
        targetPositions[idx] = (Math.random() - 0.5) * pull;
        targetPositions[idx + 1] = (Math.random() - 0.5) * pull;
        targetPositions[idx + 2] = (Math.random() - 0.5) * pull;
      } else {
        // Default void
        targetPositions[idx] = initialPositions[idx];
        targetPositions[idx + 1] = initialPositions[idx + 1];
        targetPositions[idx + 2] = initialPositions[idx + 2];
      }
    }
  }, [coreState, targetPositions, initialPositions]);

  const motionFactor = motionLevel === 'calm' ? 0.35 : motionLevel === 'cinematic' ? 1.25 : 0.85;

  useFrame(({ clock }) => {
    const points = pointsRef.current;
    const lines = linesRef.current;
    const corePoly = corePolyRef.current;
    const innerGlow = innerGlowRef.current;

    if (!points || !lines) return;

    const time = clock.getElapsedTime() * 0.4 * motionFactor;
    const currentPos = points.geometry.attributes.position.array as Float32Array;
    const currentLinePos = lines.geometry.attributes.position.array as Float32Array;

    // Smooth lerp toward target positions + mouse parallax
    const mx = mouse.centeredX * 0.4;
    const my = -mouse.centeredY * 0.4;

    const lerpSpeed = 0.045 * motionFactor;

    for (let i = 0; i < nodeCount; i++) {
      const idx = i * 3;
      // Procedural drift
      const driftX = Math.sin(time + i * 0.15) * 0.08;
      const driftY = Math.cos(time * 0.8 + i * 0.2) * 0.08;
      const driftZ = Math.sin(time * 0.6 + i * 0.1) * 0.08;

      const targetX = targetPositions[idx] + driftX + mx * 0.15;
      const targetY = targetPositions[idx + 1] + driftY + my * 0.15;
      const targetZ = targetPositions[idx + 2] + driftZ;

      currentPos[idx] += (targetX - currentPos[idx]) * lerpSpeed;
      currentPos[idx + 1] += (targetY - currentPos[idx + 1]) * lerpSpeed;
      currentPos[idx + 2] += (targetZ - currentPos[idx + 2]) * lerpSpeed;
    }
    points.geometry.attributes.position.needsUpdate = true;

    // Compute dynamic filament connections between close neighbors
    let lineIdx = 0;
    const maxDistSq = coreState === 'convergence' ? 0.35 : 1.2;

    for (let i = 0; i < nodeCount && lineIdx < maxConnections; i += 2) {
      const i3 = i * 3;
      const x1 = currentPos[i3];
      const y1 = currentPos[i3 + 1];
      const z1 = currentPos[i3 + 2];

      for (let j = i + 1; j < Math.min(i + 12, nodeCount) && lineIdx < maxConnections; j++) {
        const j3 = j * 3;
        const dx = x1 - currentPos[j3];
        const dy = y1 - currentPos[j3 + 1];
        const dz = z1 - currentPos[j3 + 2];
        const dSq = dx * dx + dy * dy + dz * dz;

        if (dSq < maxDistSq) {
          const l6 = lineIdx * 6;
          currentLinePos[l6] = x1;
          currentLinePos[l6 + 1] = y1;
          currentLinePos[l6 + 2] = z1;
          currentLinePos[l6 + 3] = currentPos[j3];
          currentLinePos[l6 + 4] = currentPos[j3 + 1];
          currentLinePos[l6 + 5] = currentPos[j3 + 2];
          lineIdx++;
        }
      }
    }

    // Zero out unused line segments
    for (let k = lineIdx; k < maxConnections; k++) {
      const k6 = k * 6;
      currentLinePos[k6] = 0;
      currentLinePos[k6 + 1] = 0;
      currentLinePos[k6 + 2] = 0;
      currentLinePos[k6 + 3] = 0;
      currentLinePos[k6 + 4] = 0;
      currentLinePos[k6 + 5] = 0;
    }
    lines.geometry.attributes.position.needsUpdate = true;

    // Global rotation and breathing
    points.rotation.y = time * 0.15;
    points.rotation.x = Math.sin(time * 0.1) * 0.12;

    lines.rotation.y = points.rotation.y;
    lines.rotation.x = points.rotation.x;

    // Central Polyhedron pulsation
    if (corePoly) {
      corePoly.rotation.y = -time * 0.25;
      corePoly.rotation.z = time * 0.18;
      const scale = coreState === 'convergence' ? 0.4 : 0.9 + 0.12 * Math.sin(time * 2.5);
      corePoly.scale.set(scale, scale, scale);
    }

    if (innerGlow) {
      innerGlow.rotation.y = time * 0.3;
      const gScale = coreState === 'convergence' ? 0.6 : 0.6 + 0.08 * Math.cos(time * 3);
      innerGlow.scale.set(gScale, gScale, gScale);
    }
  });

  const accentColor = theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff';

  return (
    <group position={[0, 0, -2.8]}>
      {/* 1. Living Computational Node Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[initialPositions, 3]}
            count={nodeCount}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
            count={nodeCount}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          vertexColors
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* 2. Dynamic Neural Filaments */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={maxConnections * 2}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[lineColors, 3]}
            count={maxConnections * 2}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={accentColor}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* 3. Central Crystalline Icosahedron Structure */}
      <mesh ref={corePolyRef}>
        <icosahedronGeometry args={[0.75, 1]} />
        <meshBasicMaterial
          wireframe
          color={accentColor}
          transparent
          opacity={0.08}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 4. Core Singularity Inner Glow */}
      <mesh ref={innerGlowRef}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshBasicMaterial
          wireframe
          color="#ffffff"
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// ── 02. Cybernetic Topographic Wave Terrain ──────────────────

function CyberneticWaveTerrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const mouse = useMousePosition();
  const theme = useSettingsStore((s) => s.theme);
  const coreState = useSettingsStore((s) => s.coreState);
  const motionLevel = useSettingsStore((s) => s.motion);

  const gridCols = 40;
  const gridRows = 28;

  const { geometry, originalY } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(28, 22, gridCols, gridRows);
    geo.rotateX(-Math.PI / 2 + 0.18);
    const pos = geo.attributes.position;
    const orig = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) {
      orig[i] = pos.getY(i);
    }
    return { geometry: geo, originalY: orig };
  }, []);

  const accentColor = theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff';
  const motionFactor = motionLevel === 'calm' ? 0.35 : motionLevel === 'cinematic' ? 1.2 : 0.8;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * 0.7 * motionFactor;
    const posAttr = meshRef.current.geometry.attributes.position;
    const count = posAttr.count;

    const waveSpeed = coreState === 'chaos' ? 1.6 : 1.0;
    const waveHeight = coreState === 'chaos' ? 0.9 : 0.5;

    const mx = mouse.centeredX * 8;
    const my = -mouse.centeredY * 5;

    for (let i = 0; i < count; i++) {
      const vx = posAttr.getX(i);
      const vz = posAttr.getZ(i);

      const wave = Math.sin(vx * 0.28 + time * waveSpeed) * Math.cos(vz * 0.22 + time * waveSpeed * 0.8) * waveHeight;
      const dx = vx - mx;
      const dz = vz - my;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const ripple = Math.exp(-dist * 0.18) * Math.sin(dist * 0.7 - time * 3) * 0.6;

      posAttr.setY(i, originalY[i] + wave + ripple);
    }
    posAttr.needsUpdate = true;
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={[0, -2.8, -3.2]}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial
          color={accentColor}
          wireframe
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </mesh>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          color="#ffffff"
          size={0.016}
          transparent
          opacity={0.16}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

// ── 03. Orbiting Polyhedral Shards ────────────────────────────

function FloatingShards() {
  const groupRef = useRef<THREE.Group>(null);
  const theme = useSettingsStore((s) => s.theme);
  const motionLevel = useSettingsStore((s) => s.motion);

  const shardData = useMemo(() => {
    const geometries = [
      new THREE.TetrahedronGeometry(0.26, 0),
      new THREE.OctahedronGeometry(0.3, 0),
      new THREE.IcosahedronGeometry(0.22, 0),
    ];
    return Array.from({ length: 7 }, (_, i) => {
      const angle = (i / 7) * Math.PI * 2;
      const radius = 4.8 + (i % 3) * 1.4;
      return {
        geo: geometries[i % geometries.length],
        baseX: Math.cos(angle) * radius,
        baseY: ((i % 5) - 2) * 1.1,
        baseZ: -3.8 + Math.sin(angle) * 1.4,
        rotSpeedX: 0.008 + (i % 3) * 0.004,
        rotSpeedY: 0.01 + (i % 4) * 0.003,
        phase: i * 1.2,
      };
    });
  }, []);

  const accentColor = theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff';
  const motionFactor = motionLevel === 'calm' ? 0.35 : motionLevel === 'cinematic' ? 1.2 : 0.8;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const time = clock.getElapsedTime() * motionFactor;
    groupRef.current.children.forEach((child, i) => {
      const data = shardData[i];
      if (!data) return;
      const t = time + data.phase;
      child.position.x = data.baseX + Math.sin(t * 0.6) * 0.3;
      child.position.y = data.baseY + Math.cos(t * 0.45) * 0.35;
      child.position.z = data.baseZ + Math.sin(t * 0.35) * 0.25;
      child.rotation.x += data.rotSpeedX;
      child.rotation.y += data.rotSpeedY;
    });
  });

  return (
    <group ref={groupRef}>
      {shardData.map((s, idx) => (
        <lineSegments key={idx} geometry={new THREE.EdgesGeometry(s.geo)} position={[s.baseX, s.baseY, s.baseZ]}>
          <lineBasicMaterial
            color={idx % 2 === 0 ? accentColor : '#ffffff'}
            transparent
            opacity={0.14}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      ))}
    </group>
  );
}

// ── 04. Deep Space Volumetric Stardust ────────────────────────

function DeepSpaceStardust() {
  const pointsRef = useRef<THREE.Points>(null);
  const theme = useSettingsStore((s) => s.theme);
  const count = 300;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const c1 = new THREE.Color(theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff');
    const c2 = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 1.5;

      const lerped = c1.clone().lerp(c2, Math.random() * 0.5);
      cols[i * 3] = lerped.r;
      cols[i * 3 + 1] = lerped.g;
      cols[i * 3 + 2] = lerped.b;
    }
    return { positions: pos, colors: cols };
  }, [theme]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const time = clock.getElapsedTime() * 0.04;
    pointsRef.current.rotation.y = time;
    pointsRef.current.rotation.x = time * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ── 05. High-Fidelity 2D SVG Vector Fallback ──────────────────

function Pure2DVectorFallback() {
  const coreState = useSettingsStore((s) => s.coreState);
  const theme = useSettingsStore((s) => s.theme);
  const accentHex = theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff';

  return (
    <div className="pure-2d-fallback" aria-hidden="true">
      <svg
        className="fallback-vector-canvas"
        viewBox="0 0 1000 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="singularityGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accentHex} stopOpacity="0.25" />
            <stop offset="50%" stopColor={accentHex} stopOpacity="0.06" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <pattern id="matrixGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.8"
            />
            <circle cx="0" cy="0" r="1" fill="rgba(255, 255, 255, 0.15)" />
          </pattern>
        </defs>

        {/* Matrix coordinate grid */}
        <rect width="100%" height="100%" fill="url(#matrixGrid)" />

        {/* Ambient radial glow */}
        <circle cx="500" cy="350" r="320" fill="url(#singularityGlow)" />

        {/* Dynamic geometric orbit rings */}
        <g className="fallback-orbit-group" transform="translate(500, 350)">
          <circle
            r="160"
            fill="none"
            stroke={accentHex}
            strokeWidth="1"
            strokeDasharray="4 8"
            opacity="0.35"
            className="orbit-ring-pulse"
          />
          <circle
            r="260"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="0.75"
            strokeDasharray="12 16"
            opacity="0.25"
          />
          <ellipse
            rx="210"
            ry="90"
            fill="none"
            stroke={accentHex}
            strokeWidth="1"
            strokeDasharray="6 6"
            opacity="0.3"
            transform="rotate(-25)"
          />

          {/* Center singularity core */}
          <polygon
            points="0,-35 30,18 -30,18"
            fill="none"
            stroke={accentHex}
            strokeWidth="1.5"
            opacity="0.6"
            className="orbit-poly-spin"
          />
          <circle r="4" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}

// ── 06. Scene Export with Adaptive Quality ────────────────────

export default function Scene() {
  const device = useDeviceCapability();
  const threeD = useSettingsStore((s) => s.threeD);

  // Render 2D Vector System if 3D is set to minimal or WebGL is not supported
  if (threeD === 'minimal' || !device.webgl) {
    return <Pure2DVectorFallback />;
  }

  const dpr = Math.min(device.pixelRatio, threeD === 'reduced' ? 1 : 1.75);

  return (
    <div className="three-canvas-wrapper" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 48, near: 0.1, far: 50 }}
        dpr={dpr}
        gl={{
          antialias: threeD === 'full',
          powerPreference: 'high-performance',
          alpha: true,
          stencil: false,
          depth: false,
        }}
        style={{ pointerEvents: 'none' }}
      >
        <LivingComputationalCore />
        <DeepSpaceStardust />
      </Canvas>
    </div>
  );
}
