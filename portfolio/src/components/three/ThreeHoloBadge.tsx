'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSettingsStore } from '@/stores/settings-store';

interface ThreeHoloBadgeProps {
  className?: string;
  size?: number;
  label?: string;
}

export default function ThreeHoloBadge({
  className = '',
  size = 220,
  label = 'PR // CORE',
}: ThreeHoloBadgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useSettingsStore((s) => s.theme);
  const threeD = useSettingsStore((s) => s.threeD);

  useEffect(() => {
    if (threeD === 'minimal') return;
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || size;
    const height = container.clientHeight || size;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5.8;

    const accentColor =
      theme === 'obsidian' ? 0xffd599 : theme === 'paper' ? 0x2563eb : 0x00f0ff;

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(amb);

    const pLight1 = new THREE.PointLight(accentColor, 4.5, 12);
    pLight1.position.set(2.5, 3, 4);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x38bdf8, 2, 8);
    pLight2.position.set(-2.5, -2, 2);
    scene.add(pLight2);

    // 3D Core Group
    const group = new THREE.Group();
    scene.add(group);

    // Outer 3D Diamond / Octahedron Wireframe
    const outerGeo = new THREE.OctahedronGeometry(1.65, 0);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerMat = new THREE.LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.85,
    });
    const outerWire = new THREE.LineSegments(outerEdges, outerMat);
    group.add(outerWire);

    // Translucent facets
    const facetMat = new THREE.MeshPhysicalMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.14,
      roughness: 0.2,
      metalness: 0.85,
    });
    const facetMesh = new THREE.Mesh(outerGeo, facetMat);
    group.add(facetMesh);

    // Inner 3D Hypercube
    const innerGeo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const innerCube = new THREE.LineSegments(innerEdges, innerMat);
    group.add(innerCube);

    // Glowing Core Node
    const coreNodeGeo = new THREE.OctahedronGeometry(0.35, 0);
    const coreNodeMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
    });
    const coreNode = new THREE.Mesh(coreNodeGeo, coreNodeMat);
    group.add(coreNode);

    // Mouse Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / height) * 2 - 1);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Group rotation
      group.rotation.y = elapsed * 0.45 + mouse.x * 0.8;
      group.rotation.x = Math.sin(elapsed * 0.3) * 0.2 - mouse.y * 0.8;

      // Counter-rotate inner hypercube
      innerCube.rotation.y = -elapsed * 0.6;
      innerCube.rotation.z = elapsed * 0.4;

      // Pulse core node
      const pulse = 1 + Math.sin(elapsed * 2.5) * 0.12;
      coreNode.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth || size;
      const h = container.clientHeight || size;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      outerGeo.dispose();
      outerEdges.dispose();
      outerMat.dispose();
      facetMat.dispose();
      innerGeo.dispose();
      innerEdges.dispose();
      innerMat.dispose();
      coreNodeGeo.dispose();
      coreNodeMat.dispose();
    };
  }, [theme, threeD, size]);

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="3D Quantum Core Hologram"
    >
      <div ref={containerRef} className="w-full h-full" />
      {label && (
        <div className="absolute -bottom-2 font-mono text-[10px] tracking-widest text-cyan-400 uppercase bg-black/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          {label}
        </div>
      )}
    </div>
  );
}
