'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xf5f4ef, 1.2);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const cobaltRimLight = new THREE.DirectionalLight(0x4d7cff, 2.5);
    cobaltRimLight.position.set(-5, -3, -3);
    scene.add(cobaltRimLight);

    const softFillLight = new THREE.PointLight(0x8fa8ff, 1.0, 10);
    softFillLight.position.set(2, -3, 3);
    scene.add(softFillLight);

    // Group for the entire sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Faceted Core Polyhedron (Translucent Dark Gunmetal Metallic)
    const coreGeo = new THREE.IcosahedronGeometry(1.05, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x141820,
      metalness: 0.85,
      roughness: 0.18,
      transmission: 0.45,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // 2. Wireframe Lattice Cage (Subtle Accent)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x4d7cff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.set(1.002, 1.002, 1.002);
    sculptureGroup.add(wireMesh);

    // 3. Fine Orbital Geodesic Rings (Kinetic Curves)
    const ringMat1 = new THREE.LineBasicMaterial({
      color: 0x8fa8ff,
      transparent: true,
      opacity: 0.5,
    });
    const ringGeo1 = new THREE.BufferGeometry();
    const ringPts1: THREE.Vector3[] = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ringPts1.push(new THREE.Vector3(Math.cos(theta) * 1.55, Math.sin(theta) * 1.55, 0));
    }
    ringGeo1.setFromPoints(ringPts1);
    const ring1 = new THREE.Line(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    sculptureGroup.add(ring1);

    const ringMat2 = new THREE.LineBasicMaterial({
      color: 0x4d7cff,
      transparent: true,
      opacity: 0.35,
    });
    const ringGeo2 = new THREE.BufferGeometry();
    const ringPts2: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ringPts2.push(new THREE.Vector3(Math.cos(theta) * 1.8, 0, Math.sin(theta) * 1.8));
    }
    ringGeo2.setFromPoints(ringPts2);
    const ring2 = new THREE.Line(ringGeo2, ringMat2);
    ring2.rotation.z = Math.PI / 4;
    sculptureGroup.add(ring2);

    // 4. Subtle Interconnection Vertices / Points
    const pointsGeo = new THREE.IcosahedronGeometry(1.05, 0);
    const pointsMat = new THREE.PointsMaterial({
      color: 0xf5f4ef,
      size: 0.045,
      transparent: true,
      opacity: 0.8,
    });
    const nodePoints = new THREE.Points(pointsGeo, pointsMat);
    sculptureGroup.add(nodePoints);

    // Subtle Satellite Nodes
    const satelliteGroup = new THREE.Group();
    sculptureGroup.add(satelliteGroup);
    const satGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x4d7cff });
    for (let i = 0; i < 3; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / 3) * Math.PI * 2;
      sat.position.set(Math.cos(angle) * 1.55, Math.sin(angle) * 1.55, 0);
      satelliteGroup.add(sat);
    }
    satelliteGroup.rotation.copy(ring1.rotation);

    // Cursor and Scroll tracking variables
    let targetRotX = 0;
    let targetRotY = 0;
    let targetCamZ = 4.2;
    let currentRotX = 0;
    let currentRotY = 0;
    let currentCamZ = 4.2;
    let isVisible = true;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotY = x * 0.45;
      targetRotX = -y * 0.45;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      targetCamZ = 4.2 + Math.min(scrollY * 0.0015, 1.2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectionObserver to pause when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = clock.getDelta();

      if (!prefersReducedMotion) {
        // Subtle constant rotation
        sculptureGroup.rotation.y += 0.004;
        ring1.rotation.z += 0.003;
        ring2.rotation.y += 0.002;

        // Smooth damping towards cursor target
        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;
        sculptureGroup.rotation.x = currentRotX;
        sculptureGroup.rotation.z = currentRotY * 0.5;

        // Scroll depth shift
        currentCamZ += (targetCamZ - currentCamZ) * 0.06;
        camera.position.z = currentCamZ;
      }

      renderer.render(scene, camera);
    };
    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      wireMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      satGeo.dispose();
      satMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-3d-sculpture-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-3d-canvas" />
      <div className="hero-3d-pedestal-glow" />
    </div>
  );
}
