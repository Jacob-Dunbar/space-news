import { useState, useEffect } from "react";
import { useGLTF, Float } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/text/space-news.gltf");

  // Set state for if on mobile or desktop
  const [isMobile, setIsMobile] = useState(window.innerWidth < 415);

  // Function to change state of isMobile
  const updateIsMobile = () => {
    setIsMobile(window.innerWidth < 415);
  };

  // Add event listener for screen resize and run updateIsMobile, plus cleanup.
  useEffect(() => {
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  });

  // Adjust scale of model for mobile
  function choseScale() {
    if (isMobile) {
      return [1.2, 1.2, 1.2];
    } else {
      return [2.5, 2.5, 2.5];
    }
  }

  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={3}>
      <group
        position={[0, 0.8, 0]}
        rotation={[1.5, 0, 0]}
        scale={choseScale()}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Curve.geometry}
          material={materials.SVGMat}
          scale={80.35}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/text/space-news.gltf");
