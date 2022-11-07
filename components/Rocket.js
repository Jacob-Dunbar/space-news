import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/text/rocket.gltf");
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

  function choseScale() {
    if (isMobile) {
      return [1.3, 1.3, 1.3];
    } else {
      return [2.3, 2.3, 2.3];
    }
  }

  function chosePosition() {
    if (isMobile) {
      return [-5.2, -2, 0];
    } else {
      return [-9.1, -4.5, 0];
    }
  }

  return (
    <group
      position={chosePosition()}
      scale={choseScale()}
      rotation={[1.5, -0.006, 0]}
      {...props}
      dispose={null}
    >
      <group position={[3.97, 0, -0.95]} scale={[43.66, 54.7, 43.66]}>
        <mesh
          geometry={nodes.Curve002_1.geometry}
          material={materials.SVGMat}
        />
        <mesh
          geometry={nodes.Curve002_2.geometry}
          material={materials["SVGMat.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/text/rocket.gltf");
