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

    // 5. Helper function to create page textures dynamically using HTML5 Canvas
    const createPageTexture = (side) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      // Background cream color gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      if (side === 'left') {
        grad.addColorStop(0, '#e5d5b0'); // crease shadow
        grad.addColorStop(0.15, '#faf5e6');
        grad.addColorStop(1, '#ffffff'); // outer edge
      } else {
        grad.addColorStop(0, '#ffffff'); // outer edge
        grad.addColorStop(0.85, '#faf5e6');
        grad.addColorStop(1, '#e5d5b0'); // crease shadow
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Ornate Gold Borders
      ctx.strokeStyle = '#c5a850';
      ctx.lineWidth = 5;
      ctx.strokeRect(25, 25, 512 - 50, 512 - 50);
      
      ctx.lineWidth = 1.5;
      ctx.strokeRect(32, 32, 512 - 64, 512 - 64);

      // Corner Arabesque decorations
      const drawCornerDeco = (x, y, angle) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = '#10b981'; // Emerald dot
        ctx.strokeStyle = '#c5a850';
        ctx.lineWidth = 1.5;
        
        // Tiny emerald diamond
        ctx.beginPath();
        ctx.moveTo(0, -6);
        ctx.lineTo(6, 0);
        ctx.lineTo(0, 6);
        ctx.lineTo(-6, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Gold floral extension arcs
        ctx.beginPath();
        ctx.arc(0, 0, 10, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();
        ctx.restore();
      };
      drawCornerDeco(32, 32, 0);
      drawCornerDeco(512 - 32, 32, Math.PI / 2);
      drawCornerDeco(32, 512 - 32, -Math.PI / 2);
      drawCornerDeco(512 - 32, 512 - 32, Math.PI);

      // Draw elegant central Rub el Hizb Medallion
      const cx = 256;
      const cy = 256;
      ctx.save();
      ctx.translate(cx, cy);
      
      // Outer subtle emerald ring
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 75, 0, Math.PI * 2);
      ctx.stroke();

      // Double golden Rub el Hizb star
      ctx.strokeStyle = '#c5a850';
      ctx.fillStyle = '#faf6e8';
      ctx.lineWidth = 3;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.rect(-45, -45, 90, 90);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
      }

      // Inner deep green circle
      ctx.fillStyle = '#064e3b';
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#c5a850';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Central gold floral petals
      ctx.fillStyle = '#d4af37';
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        ctx.arc(0, -10, 6, 0, Math.PI * 2);
        ctx.rotate(Math.PI / 4);
      }
      ctx.fill();

      ctx.restore();

      // Wavy calligraphic lines that wrap around the central medallion
      ctx.strokeStyle = 'rgba(197, 168, 80, 0.35)'; // translucent gold
      ctx.lineWidth = 2;
      const lineSpacing = 26;
      
      const drawWaveLine = (y) => {
        ctx.beginPath();
        ctx.moveTo(70, y);
        for (let x = 70; x <= 442; x += 15) {
          const isOverMedallion = Math.abs(x - 256) < 110 && Math.abs(y - 256) < 110;
          if (!isOverMedallion) {
            const wave = Math.sin(x * 0.1) * 2;
            ctx.lineTo(x, y + wave);
          } else {
            ctx.moveTo(x, y); // skip drawing over medallion
          }
        }
        ctx.stroke();
      };

      for (let y = 70; y < 140; y += lineSpacing) {
        drawWaveLine(y);
      }
      for (let y = 380; y < 460; y += lineSpacing) {
        drawWaveLine(y);
      }
      
      // Bottom titles
      ctx.fillStyle = '#c5a850';
      ctx.font = 'italic 16px serif';
      ctx.textAlign = 'center';
      if (side === 'left') {
        ctx.fillText('I N I S I A S I', 256, 485);
      } else {
        ctx.fillText('K E B A J I K A N', 256, 485);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const leftPageTexture = createPageTexture('left');
    const rightPageTexture = createPageTexture('right');

    // Helper to create the beautiful backdrop mandala
    const createMandalaTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, 512, 512);
      ctx.save();
      ctx.translate(256, 256);

      // Outer thin ring
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, 240, 0, Math.PI * 2);
      ctx.stroke();

      // Multi-pointed star / Mandala geometry (16-pointed star)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.55)'; // glowing gold
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.rect(-160, -160, 320, 320);
        ctx.stroke();
        ctx.rotate(Math.PI / 8);
      }

      // Floral ring of tiny circles
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 24; i++) {
        ctx.beginPath();
        ctx.arc(0, -120, 15, 0, Math.PI * 2);
        ctx.stroke();
        ctx.rotate(Math.PI / 12);
      }

      // Scalloped outer ring
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 36; i++) {
        ctx.beginPath();
        ctx.arc(0, -210, 10, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        ctx.rotate(Math.PI / 18);
      }

      // Inner 8-pointed star
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
      ctx.lineWidth = 2.5;
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.rect(-70, -70, 140, 140);
        ctx.stroke();
        ctx.rotate(Math.PI / 4);
      }

      // Center solid glowing core
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 45);
      grad.addColorStop(0, 'rgba(16, 185, 129, 0.85)');
      grad.addColorStop(0.5, 'rgba(16, 185, 129, 0.3)');
      grad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const mandalaTexture = createMandalaTexture();

    // 6. Assemble the 3D Kitab & Rehal Group
    const bookGroup = new THREE.Group();
    scene.add(bookGroup);

    // Rehal (Tatakan Kayu) Planks
    // Colors & Materials
    const woodMat = new THREE.MeshPhysicalMaterial({
      color: 0x032b1d, // Very dark emerald/jade wood
      roughness: 0.3,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
    });

    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37, // Polished Gold
      roughness: 0.15,
      metalness: 0.85,
    });

    const coverMat = new THREE.MeshPhysicalMaterial({
      color: 0x054631, // Deep emerald leather cover
      roughness: 0.45,
      metalness: 0.15,
      bumpScale: 0.05,
    });

    const paperEdgeMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37, // Golden paper edges
      roughness: 0.25,
      metalness: 0.75,
    });

    const paperBackMat = new THREE.MeshBasicMaterial({
      color: 0xfcfaf2, // Simple cream back
    });

    const leftPageTexturedMat = new THREE.MeshBasicMaterial({
      map: leftPageTexture,
    });

    const rightPageTexturedMat = new THREE.MeshBasicMaterial({
      map: rightPageTexture,
    });

    // Materials arrays for pages stacks
    const leftPageMaterials = [
      paperEdgeMat, // Right
      paperEdgeMat, // Left
      paperEdgeMat, // Top
      paperEdgeMat, // Bottom
      leftPageTexturedMat, // Front surface
      paperBackMat, // Back
    ];

    const rightPageMaterials = [
      paperEdgeMat, // Right
      paperEdgeMat, // Left
      paperEdgeMat, // Top
      paperEdgeMat, // Bottom
      rightPageTexturedMat, // Front surface
      paperBackMat, // Back
    ];

    // Rehal Plank A
    const plankA = new THREE.Mesh(new THREE.BoxGeometry(4.5, 9.0, 0.22), woodMat);
    plankA.rotation.z = Math.PI / 6; // 30 deg
    bookGroup.add(plankA);

    const plankATrim = new THREE.Mesh(new THREE.BoxGeometry(4.1, 8.6, 0.24), goldMat);
    plankATrim.rotation.z = Math.PI / 6;
    bookGroup.add(plankATrim);

    // Rehal Plank B
    const plankB = new THREE.Mesh(new THREE.BoxGeometry(4.5, 9.0, 0.22), woodMat);
    plankB.rotation.z = -Math.PI / 6; // -30 deg
    bookGroup.add(plankB);

    const plankBTrim = new THREE.Mesh(new THREE.BoxGeometry(4.1, 8.6, 0.24), goldMat);
    plankBTrim.rotation.z = -Math.PI / 6;
    bookGroup.add(plankBTrim);

    // Left Page Assembly Group
    const leftPageGroup = new THREE.Group();
    leftPageGroup.rotation.z = Math.PI / 6;
    leftPageGroup.position.set(-1.85, 1.07, 0.05);
    bookGroup.add(leftPageGroup);

    // Left Cover
    const leftCover = new THREE.Mesh(new THREE.BoxGeometry(4.1, 5.8, 0.08), coverMat);
    leftCover.position.z = -0.165;
    leftPageGroup.add(leftCover);

    // Left Cover Gold Corner Trims
    const cornerGeom = new THREE.BoxGeometry(0.5, 0.5, 0.1);
    const goldCornerTL = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerTL.position.set(-1.8, 2.65, -0.165);
    leftPageGroup.add(goldCornerTL);
    const goldCornerTR = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerTR.position.set(1.8, 2.65, -0.165);
    leftPageGroup.add(goldCornerTR);
    const goldCornerBL = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerBL.position.set(-1.8, -2.65, -0.165);
    leftPageGroup.add(goldCornerBL);
    const goldCornerBR = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerBR.position.set(1.8, -2.65, -0.165);
    leftPageGroup.add(goldCornerBR);

    // Left Pages Stack (with page texture on front)
    const leftPages = new THREE.Mesh(new THREE.BoxGeometry(3.9, 5.6, 0.24), leftPageMaterials);
    leftPageGroup.add(leftPages);

    // Right Page Assembly Group
    const rightPageGroup = new THREE.Group();
    rightPageGroup.rotation.z = -Math.PI / 6;
    rightPageGroup.position.set(1.85, 1.07, 0.05);
    bookGroup.add(rightPageGroup);

    // Right Cover
    const rightCover = new THREE.Mesh(new THREE.BoxGeometry(4.1, 5.8, 0.08), coverMat);
    rightCover.position.z = -0.165;
    rightPageGroup.add(rightCover);

    // Right Cover Gold Corner Trims
    const goldCornerRTL = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerRTL.position.set(-1.8, 2.65, -0.165);
    rightPageGroup.add(goldCornerRTL);
    const goldCornerRTR = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerRTR.position.set(1.8, 2.65, -0.165);
    rightPageGroup.add(goldCornerRTR);
    const goldCornerRBL = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerRBL.position.set(-1.8, -2.65, -0.165);
    rightPageGroup.add(goldCornerRBL);
    const goldCornerRBR = new THREE.Mesh(cornerGeom, goldMat);
    goldCornerRBR.position.set(1.8, -2.65, -0.165);
    rightPageGroup.add(goldCornerRBR);

    // Right Pages Stack (with page texture on front)
    const rightPages = new THREE.Mesh(new THREE.BoxGeometry(3.9, 5.6, 0.24), rightPageMaterials);
    rightPageGroup.add(rightPages);

    // 7. Backdrop Glowing Mandala Plane
    const mandalaGeom = new THREE.PlaneGeometry(16, 16);
    const mandalaMat = new THREE.MeshBasicMaterial({
      map: mandalaTexture,
      transparent: true,
      opacity: 0.24,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const mandalaMesh = new THREE.Mesh(mandalaGeom, mandalaMat);
    mandalaMesh.position.set(0, 0, -5.0);
    scene.add(mandalaMesh);

    // Additional soft golden light on pages
    const pageLight = new THREE.PointLight(0xfff2b2, 2.2, 35);
    pageLight.position.set(0, 3, 7);
    scene.add(pageLight);

    // 8. Glowing "Nur" Sparks (Gold and Emerald)
    const sparkCount = 120;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkColors = new Float32Array(sparkCount * 3);

    for (let i = 0; i < sparkCount; i++) {
      // Spawn near the book
      sparkPositions[i * 3] = (Math.random() - 0.5) * 6;
      sparkPositions[i * 3 + 1] = Math.random() * 15 - 5; // y-range from -5 to 10
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 4;

      // Golden (0.83, 0.68, 0.22) or Emerald (0.06, 0.72, 0.5) colors
      const isGold = Math.random() > 0.4;
      if (isGold) {
        sparkColors[i * 3] = 0.85 + Math.random() * 0.15; // R
        sparkColors[i * 3 + 1] = 0.68 + Math.random() * 0.1; // G
        sparkColors[i * 3 + 2] = 0.22 + Math.random() * 0.1; // B
      } else {
        sparkColors[i * 3] = 0.06 + Math.random() * 0.1; // R
        sparkColors[i * 3 + 1] = 0.72 + Math.random() * 0.15; // G
        sparkColors[i * 3 + 2] = 0.5 + Math.random() * 0.1; // B
      }
    }

    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeometry.setAttribute('color', new THREE.BufferAttribute(sparkColors, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const sparkParticles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkParticles);

    // Set initial position of bookstand group
    bookGroup.position.set(0, -1, 0);

    // 9. Mouse Parallax Controllers
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

    // 10. Animation Rendering Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth lag interpolation
      targetX = THREE.MathUtils.lerp(targetX, mouseX, 0.05);
      targetY = THREE.MathUtils.lerp(targetY, mouseY, 0.05);

      // Gentle floating animation (sinusoidal Y drift)
      bookGroup.position.y = -1.2 + Math.sin(elapsedTime * 0.8) * 0.35;

      // Tilts and rotations of bookGroup influenced by mouse
      bookGroup.rotation.x = 0.45 + targetY * 0.45; // forward tilt
      bookGroup.rotation.y = elapsedTime * 0.045 + targetX * 0.55; // slow spinning + parallax Y rotation
      bookGroup.rotation.z = targetX * 0.15; // parallax Z roll

      // Rotate background mandala
      mandalaMesh.rotation.z = -elapsedTime * 0.025;

      // Slow spark rising drift ("Nur" light)
      const sparkArr = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i++) {
        sparkArr[i * 3 + 1] += 0.022; // rise up
        sparkArr[i * 3] += Math.sin(elapsedTime * 0.4 + i) * 0.006; // horizontal sway
        if (sparkArr[i * 3 + 1] > 11) {
          sparkArr[i * 3 + 1] = -2.5; // reset near book surface
          sparkArr[i * 3] = (Math.random() - 0.5) * 6; // re-spawn on book width
          sparkArr[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
      }
      sparkGeometry.attributes.position.needsUpdate = true;

      // Orbit camera drift
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX * 7, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY * 7, 0.05);
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // 11. Resize Listener
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 12. Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose materials & geometries to prevent memory leaks
      plankA.geometry.dispose();
      plankB.geometry.dispose();
      plankATrim.geometry.dispose();
      plankBTrim.geometry.dispose();
      leftCover.geometry.dispose();
      rightCover.geometry.dispose();
      cornerGeom.dispose();
      leftPages.geometry.dispose();
      rightPages.geometry.dispose();
      mandalaGeom.dispose();
      sparkGeometry.dispose();
      
      woodMat.dispose();
      goldMat.dispose();
      coverMat.dispose();
      paperEdgeMat.dispose();
      paperBackMat.dispose();
      leftPageTexturedMat.dispose();
      rightPageTexturedMat.dispose();
      mandalaMat.dispose();
      sparkMaterial.dispose();
      
      leftPageTexture.dispose();
      rightPageTexture.dispose();
      mandalaTexture.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
    />
  );
}
