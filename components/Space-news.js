import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/text/space-news.gltf");
  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={4}>
      <group
        rotation={[1.5, 0, 0]}
        scale={[2.5, 2.5, 2.5]}
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
