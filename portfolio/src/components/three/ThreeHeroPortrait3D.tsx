'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useSettingsStore } from '@/stores/settings-store';
import { sound } from '@/lib/sound';
import { Sparkles, Layers, Cpu, Eye, RotateCcw } from 'lucide-react';

type RenderMode = 'hologram' | 'particles' | 'wireframe';

export default function ThreeHeroPortrait3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMode, setActiveMode] = useState<RenderMode>('hologram');
  const [isHovered, setIsHovered] = useState(false);
  const theme = useSettingsStore((s) => s.theme);
  const soundEnabled = useSettingsStore((s) => s.sound);

  // Keep state ref for animation loop
  const modeRef = useRef<RenderMode>(activeMode);
  modeRef.current = activeMode;

  useEffect(() => {
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

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 580;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.8);

    const accentColor =
      theme === 'obsidian' ? 0xffd599 : theme === 'paper' ? 0x2563eb : 0x00f0ff;
    const accentHex =
      theme === 'obsidian' ? '#ffd599' : theme === 'paper' ? '#2563eb' : '#00f0ff';

    // Master 3D Group containing all interactive elements
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // ── 01. LIGHTING ───────────────────────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Celestial orb light (from above head)
    const orbLight = new THREE.PointLight(accentColor, 4.0, 8);
    orbLight.position.set(0, 1.6, 0.8);
    masterGroup.add(orbLight);

    // Tablet light (from hands upwards)
    const tabletLight = new THREE.PointLight(0x38bdf8, 2.5, 6);
    tabletLight.position.set(0, -1.5, 1.0);
    masterGroup.add(tabletLight);

    // Interactive cursor follow light
    const cursorLight = new THREE.PointLight(accentColor, 2.0, 10);
    cursorLight.position.set(0, 0, 3);
    scene.add(cursorLight);

    // ── 02. 3D VOLUMETRIC PHOTO MESH / POINT CLOUD ─────────────
    const textureLoader = new THREE.TextureLoader();
    const photoTexture = textureLoader.load('/images/hero-portrait.jpg');
    photoTexture.generateMipmaps = true;
    photoTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // High density grid for 3D depth displacement
    const gridW = 110;
    const gridH = 138;
    const meshGeo = new THREE.PlaneGeometry(3.6, 4.5, gridW, gridH);

    // Custom Shaders for 3D Holographic Volumetric Relief
    const hologramUniforms = {
      uTexture: { value: photoTexture },
      uTime: { value: 0 },
      uDepth: { value: 0.52 },
      uAccentColor: { value: new THREE.Color(accentHex) },
      uHover: { value: 0.0 },
    };

    const hologramVertexShader = `
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform float uDepth;
      uniform float uHover;
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormalVec;

      void main() {
        vUv = uv;
        vec4 texColor = texture2D(uTexture, uv);
        
        // Calculate perceptual luminance for Z depth
        float lum = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
        
        // Emphasize face and celestial body depth
        float depthDisplacement = pow(lum, 1.4) * uDepth;
        
        // Subtle breathing harmonic wave
        float breath = sin(uTime * 1.8 + position.y * 2.0) * 0.025;
        
        vec3 displaced = position;
        displaced.z += depthDisplacement + breath;
        
        vElevation = displaced.z;
        vNormalVec = normalMatrix * normal;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
        gl_PointSize = (2.2 + depthDisplacement * 2.5) * (1.0 / -gl_Position.z) * 6.0;
      }
    `;

    const hologramFragmentShader = `
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform vec3 uAccentColor;
      uniform float uHover;
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormalVec;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        
        // Scanline sweep effect
        float scanline = sin(vUv.y * 140.0 - uTime * 2.5) * 0.04;
        
        // Holographic chromatic edge fringe
        float edgeGlow = smoothstep(0.3, 0.7, vElevation) * 0.18;
        
        vec3 finalColor = color.rgb + scanline + (uAccentColor * edgeGlow * (1.0 + uHover * 0.5));
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const hologramMaterial = new THREE.ShaderMaterial({
      uniforms: hologramUniforms,
      vertexShader: hologramVertexShader,
      fragmentShader: hologramFragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
    });

    // Mesh instance for Hologram mode
    const photoMesh = new THREE.Mesh(meshGeo, hologramMaterial);
    masterGroup.add(photoMesh);

    // Particle Point Cloud Material for Particles mode
    const particleFragmentShader = `
      uniform sampler2D uTexture;
      uniform vec3 uAccentColor;
      varying vec2 vUv;
      varying float vElevation;

      void main() {
        vec4 color = texture2D(uTexture, vUv);
        if (color.a < 0.1) discard;
        
        // Circular point styling
        vec2 coord = gl_PointCoord - vec2(0.5);
        if (length(coord) > 0.5) discard;
        
        float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        vec3 pColor = mix(color.rgb, uAccentColor, 0.25 + vElevation * 0.3);
        gl_FragColor = vec4(pColor, 0.85);
      }
    `;

    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: hologramUniforms,
      vertexShader: hologramVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const photoPoints = new THREE.Points(meshGeo, particlesMaterial);
    photoPoints.visible = false;
    masterGroup.add(photoPoints);

    // Wireframe Mesh instance for Wireframe mode
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const photoWireframe = new THREE.Mesh(meshGeo, wireframeMat);
    photoWireframe.visible = false;
    masterGroup.add(photoWireframe);

    // ── 03. REAL 3D CELESTIAL QUANTUM SPHERE (ABOVE HEAD) ─────
    const orbGroup = new THREE.Group();
    orbGroup.position.set(0, 1.5, 0.45);
    masterGroup.add(orbGroup);

    // Celestial Sphere Core
    const orbCoreGeo = new THREE.SphereGeometry(0.38, 24, 24);
    const orbCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      wireframe: true,
    });
    const orbCore = new THREE.Mesh(orbCoreGeo, orbCoreMat);
    orbGroup.add(orbCore);

    // Outer Translucent Glow Sphere
    const orbAtmosphereGeo = new THREE.SphereGeometry(0.48, 24, 24);
    const orbAtmosphereMat = new THREE.MeshPhysicalMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.28,
      roughness: 0.1,
      metalness: 0.9,
    });
    const orbAtmosphere = new THREE.Mesh(orbAtmosphereGeo, orbAtmosphereMat);
    orbGroup.add(orbAtmosphere);

    // Planetary Dual Rings
    const ring1Geo = new THREE.RingGeometry(0.55, 0.72, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: accentColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ringMat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.rotation.y = 0.2;
    orbGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(0.78, 0.84, 48);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.5;
    ring2.rotation.y = -0.3;
    orbGroup.add(ring2);

    // Orbiting Stardust Particles around Sphere
    const orbParticleCount = 45;
    const orbParticleGeo = new THREE.BufferGeometry();
    const orbParticlePositions = new Float32Array(orbParticleCount * 3);
    for (let i = 0; i < orbParticleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const rad = 0.5 + Math.random() * 0.45;
      orbParticlePositions[i * 3] = Math.cos(theta) * rad;
      orbParticlePositions[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      orbParticlePositions[i * 3 + 2] = Math.sin(theta) * rad;
    }
    orbParticleGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(orbParticlePositions, 3)
    );
    const orbPointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const orbPoints = new THREE.Points(orbParticleGeo, orbPointsMat);
    orbGroup.add(orbPoints);

    // ── 04. 3D HOLOGRAPHIC DATA TABLET (AT HANDS LEVEL) ────────
    const tabletGroup = new THREE.Group();
    tabletGroup.position.set(0, -1.6, 0.65);
    tabletGroup.rotation.x = -0.55;
    masterGroup.add(tabletGroup);

    // Tablet Glass Screen
    const tabletGeo = new THREE.PlaneGeometry(1.6, 0.55);
    const tabletMat = new THREE.MeshPhysicalMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.22,
      roughness: 0.1,
      metalness: 0.9,
    });
    const tabletMesh = new THREE.Mesh(tabletGeo, tabletMat);
    tabletGroup.add(tabletMesh);

    // Tablet Glowing Edges
    const tabletEdgesGeo = new THREE.EdgesGeometry(tabletGeo);
    const tabletEdgesMat = new THREE.LineBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.8,
    });
    const tabletEdges = new THREE.LineSegments(tabletEdgesGeo, tabletEdgesMat);
    tabletGroup.add(tabletEdges);

    // ── 05. INTERACTIVE MOUSE / TOUCH PARALLAX ─────────────────
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / height) * 2 - 1);
      mouse.targetX = Math.max(-1, Math.min(1, nx));
      mouse.targetY = Math.max(-1, Math.min(1, ny));
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // ── 06. RENDER LOOP ───────────────────────────────────────
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 3D Master Group Parallax Tilt
      masterGroup.rotation.y = mouse.x * 0.38;
      masterGroup.rotation.x = -mouse.y * 0.28;
      masterGroup.position.z = Math.abs(mouse.x) * 0.2;

      // Cursor light follow
      cursorLight.position.x = mouse.x * 3.0;
      cursorLight.position.y = mouse.y * 3.0;

      // Update shader uniforms
      hologramUniforms.uTime.value = elapsed;
      hologramUniforms.uHover.value +=
        ((isHovered ? 1.0 : 0.0) - hologramUniforms.uHover.value) * 0.1;

      // Animate Celestial Sphere
      orbCore.rotation.y = elapsed * 0.5;
      orbCore.rotation.x = Math.sin(elapsed * 0.4) * 0.2;
      ring1.rotation.z = elapsed * 0.35;
      ring2.rotation.z = -elapsed * 0.25;
      orbPoints.rotation.y = elapsed * 0.6;

      // Pulsate celestial light
      orbLight.intensity = 3.5 + Math.sin(elapsed * 3.0) * 0.8;

      // Animate tablet data plane pulse
      tabletEdgesMat.opacity = 0.6 + Math.sin(elapsed * 4.0) * 0.25;

      // Mode visibility switcher
      const currentMode = modeRef.current;
      photoMesh.visible = currentMode === 'hologram';
      photoPoints.visible = currentMode === 'particles';
      photoWireframe.visible = currentMode === 'wireframe';

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || width;
      const h = container.clientHeight || height;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      meshGeo.dispose();
      hologramMaterial.dispose();
      particlesMaterial.dispose();
      wireframeMat.dispose();
      photoTexture.dispose();
      orbCoreGeo.dispose();
      orbCoreMat.dispose();
      orbAtmosphereGeo.dispose();
      orbAtmosphereMat.dispose();
      ring1Geo.dispose();
      ringMat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      orbParticleGeo.dispose();
      orbPointsMat.dispose();
      tabletGeo.dispose();
      tabletMat.dispose();
      tabletEdgesGeo.dispose();
      tabletEdgesMat.dispose();
    };
  }, [theme, isHovered]);

  const switchMode = (mode: RenderMode) => {
    setActiveMode(mode);
    if (soundEnabled) {
      sound.playScan();
      sound.playClick(900);
    }
  };

  return (
    <div
      className="portrait-card relative w-full aspect-[4/5] rounded-[28px] overflow-hidden border border-cyan-500/30 bg-[#07090e]/90 shadow-[0_25px_70px_rgba(0,0,0,0.85)] group select-none"
      aria-label="Interactive 3D Holographic Portrait Model"
    >
      {/* Real-time WebGL 3D Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Top 3D Status HUD Badge */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00f0ff]" />
          <span>3D VOLUMETRIC MODEL // ACTIVE</span>
        </div>

        <div className="text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          TILT MOUSE TO INSPECT
        </div>
      </div>

      {/* Mode Switcher Buttons Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 p-1 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 z-30 shadow-2xl">
        <button
          onClick={() => switchMode('hologram')}
          className={`px-3 py-1.5 rounded-xl font-mono text-[11px] tracking-wider transition-all flex items-center gap-1.5 ${
            activeMode === 'hologram'
              ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
          title="3D Hologram Volumetric Relief"
        >
          <Eye size={12} />
          <span>HOLOGRAM</span>
        </button>

        <button
          onClick={() => switchMode('particles')}
          className={`px-3 py-1.5 rounded-xl font-mono text-[11px] tracking-wider transition-all flex items-center gap-1.5 ${
            activeMode === 'particles'
              ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
          title="3D Voxel Particle Point Cloud"
        >
          <Sparkles size={12} />
          <span>PARTICLES</span>
        </button>

        <button
          onClick={() => switchMode('wireframe')}
          className={`px-3 py-1.5 rounded-xl font-mono text-[11px] tracking-wider transition-all flex items-center gap-1.5 ${
            activeMode === 'wireframe'
              ? 'bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
              : 'text-zinc-400 hover:text-white'
          }`}
          title="3D Cybernetic Wireframe Topology"
        >
          <Cpu size={12} />
          <span>WIREFRAME</span>
        </button>
      </div>

      {/* Cybernetic Corner Borders */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />
    </div>
  );
}
