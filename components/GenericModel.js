import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/generic/scene.gltf");
  const Mod = useRef();

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

  function chosePosition() {
    if (isMobile) {
      return [-0.2, 0, 0];
    } else {
      return [0.5, -0.5, 0];
    }
  }

  // Slow rotate anaimation
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * 0.1;
    const b = clock.getElapsedTime() * 0.04 + 2.9;
    Mod.current.rotation.y = a;
    // Mod.current.rotation.x = b;
  });

  return (
    <group
      rotation={[0, -0.3, 0.3]}
      position={chosePosition()}
      {...props}
      dispose={null}
    >
      <group scale={[1.9, 1.9, 1.9]} rotation={[-1, -0.2, 0]}>
        <group ref={Mod} rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group scale={5.3}>
            <group position={[0, 11.94, 0]} />
            <group position={[0, -9.1, 0]}>
              <group position={[0.06, 7.79, 0.17]}>
                <mesh
                  geometry={nodes.Cylinder_008_1.geometry}
                  material={materials.Atlas_401}
                />
                <mesh
                  geometry={nodes.Cylinder_008_2.geometry}
                  material={materials.Cube}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/generic/scene.gltf");
