import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x051c13, 0.015);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 25;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x10b981, 2, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x059669, 1.5, 40);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // 5. Creating the Glowing Particle Sphere (Academy Core Core)
    const particleCount = window.innerWidth < 768 ? 500 : 1200;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 8;
    for (let i = 0; i < particleCount; i++) {
      // Golden ratio distribution for a perfect sphere shell
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      // Add slight noise to make it feel natural/organic
      const noise = (Math.random() - 0.5) * 0.4;
      const r = radius + noise;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Premium Emerald-to-Mint Color Gradients
      const ratio = i / particleCount;
      colors[i * 3] = THREE.MathUtils.lerp(0.02, 0.06, ratio); // R (subtle emerald bases)
      colors[i * 3 + 1] = THREE.MathUtils.lerp(0.58, 0.72, ratio); // G
      colors[i * 3 + 2] = THREE.MathUtils.lerp(0.41, 0.51, ratio); // B
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Round Glowing Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(16, 185, 129, 0.8)');
    grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.35 : 0.28,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSphere = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSphere);

    // 6. Creating Floating Glassy Mesh Ring
    const torusGeom = new THREE.TorusGeometry(12, 0.08, 16, 100);
    const torusMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      metalness: 0.1,
      roughness: 0.2,
      transparent: true,
      opacity: 0.2,
      wireframe: true
    });
    const floatingRing = new THREE.Mesh(torusGeom, torusMat);
    scene.add(floatingRing);

    // Floating Glassy Octahedron Core
    const octGeom = new THREE.OctahedronGeometry( radius * 0.45, 0 );
    const octMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x059669,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.3,
      flatShading: true,
    });
    const octahedron = new THREE.Mesh(octGeom, octMat);
    scene.add(octahedron);

    // 7. Ambient Floating Spark Particles
    const sparkCount = 100;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 45; // wide spreading x
      sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 45; // y
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }

    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0x10b981,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkParticles);

    // 8. Mouse Parallax Controllers
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      // Normalize coordinate: -0.5 to 0.5
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 9. Animation Rendering Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth lag interpolation
      targetX = THREE.MathUtils.lerp(targetX, mouseX, 0.05);
      targetY = THREE.MathUtils.lerp(targetY, mouseY, 0.05);

      // Rotate sphere core
      particleSphere.rotation.y = elapsedTime * 0.05;
      particleSphere.rotation.x = elapsedTime * 0.02;

      // Parallax shifts on mousemove
      particleSphere.position.x = targetX * 6;
      particleSphere.position.y = -targetY * 6;

      // Floating wireframe ring rotations
      floatingRing.rotation.x = elapsedTime * 0.08;
      floatingRing.rotation.y = elapsedTime * 0.04;
      floatingRing.position.x = targetX * 4;
      floatingRing.position.y = -targetY * 4;

      // Floating octahedron
      octahedron.rotation.y = -elapsedTime * 0.15;
      octahedron.rotation.z = elapsedTime * 0.08;
      octahedron.position.y = (Math.sin(elapsedTime * 1.5) * 0.5) - (targetY * 5);
      octahedron.position.x = targetX * 5;

      // Slow spark rising drift
      const sparkArr = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        sparkArr[i * 3 + 1] += 0.02; // rise up
        if (sparkArr[i * 3 + 1] > 22) {
          sparkArr[i * 3 + 1] = -22; // reset bottom
        }
      }
      sparkGeometry.attributes.position.needsUpdate = true;

      // Orbit camera drift
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX * 8, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY * 8, 0.05);
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // 10. Resize Listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Dynamic adjustments based on screens
      particlesMaterial.size = w < 768 ? 0.35 : 0.28;
    };

    window.addEventListener('resize', handleResize);

    // 11. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose materials & geometries to prevent memory leaks
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      octGeom.dispose();
      octMat.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      texture.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
}
