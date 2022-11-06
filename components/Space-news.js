import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/text/space-news.gltf");
  return (
    <Float speed={0.75} rotationIntensity={0.25} floatIntensity={4}>
      <group
        {...props}
        dispose={null}
        rotation={[1.5, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      >
        <mesh
          geometry={nodes.Curve003.geometry}
          material={materials["SVGMat.002"]}
          scale={514.56}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/text/space-news.gltf");
