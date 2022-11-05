import { useRef, useState } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF("/models/tiangong/scene.gltf");
  const group = useRef();
  const Mod = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * 0.1;
    const b = clock.getElapsedTime() * 0.04;
    // Mod.current.rotation.y = a;
    Mod.current.rotation.x = b;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <group
        scale={[0.07, 0.07, 0.07]}
        rotation={[2, 6.5, 0]}
        position={[-3, 0, 0]}
      >
        <group ref={Mod} rotation={[Math.PI / 2, 0, 0]}>
          <group position={[57.97, 31.02, 61.66]} rotation={[2, 0, 6]} />
          <group position={[20, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh
              geometry={nodes["Cylinder01_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
            />
          </group>
          <group position={[20, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh
              geometry={nodes["Cone01_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh
              geometry={nodes["Cone02_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group
            position={[-2.5, 0, 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Cylinder02_Material_#2_0"].geometry}
              material={materials.Material_2}
            />
          </group>
          <group position={[25, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
            <mesh
              geometry={nodes["Tube01_02_-_Default_0"].geometry}
              material={materials["02_-_Default"]}
            />
          </group>
          <group
            position={[25, 1.43, 0]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Box01_07_-_Default_0"].geometry}
              material={materials["07_-_Default"]}
            />
          </group>
          <group
            position={[25, -0.78, -1.23]}
            rotation={[2.62, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Box02_07_-_Default_0"].geometry}
              material={materials["07_-_Default"]}
            />
          </group>
          <group
            position={[25, -0.79, 1.23]}
            rotation={[Math.PI / 6, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Box03_07_-_Default_0"].geometry}
              material={materials["07_-_Default"]}
            />
          </group>
          <group position={[24.5, 2.09, -2.09]} rotation={[-Math.PI / 4, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder03_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[24.5, -2.09, 2.09]} rotation={[-Math.PI / 4, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder04_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[24.5, 2.09, 2.09]} rotation={[Math.PI / 4, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder05_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[24.5, -2.09, -2.09]} rotation={[Math.PI / 4, 0, 0]}>
            <mesh
              geometry={nodes["Cylinder06_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-10.58, 0, 6.68]}>
            <mesh
              geometry={nodes["Loft01_09_-_Default_0"].geometry}
              material={materials["09_-_Default"]}
            />
          </group>
          <group position={[-10.58, 0, -6.68]} rotation={[Math.PI, 0, 0]}>
            <mesh
              geometry={nodes["Loft02_09_-_Default_0"].geometry}
              material={materials["09_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, 10.59]}>
            <mesh
              geometry={nodes["Box04_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, 17.5]}>
            <mesh
              geometry={nodes["Box05_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, 24.39]}>
            <mesh
              geometry={nodes["Box06_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, 31.21]}>
            <mesh
              geometry={nodes["Box07_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, -24.31]}>
            <mesh
              geometry={nodes["Box08_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, -17.41]}>
            <mesh
              geometry={nodes["Box09_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, -10.59]}>
            <mesh
              geometry={nodes["Box10_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group position={[-10.62, -0.05, -31.22]}>
            <mesh
              geometry={nodes["Box11_08_-_Default_0"].geometry}
              material={materials["08_-_Default"]}
            />
          </group>
          <group
            position={[-20.1, 2.25, -2.25]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Cone03_20_-_Default_0"].geometry}
              material={materials["20_-_Default"]}
            />
          </group>
          <group
            position={[-20.1, 2.25, 2.25]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Cone04_20_-_Default_0"].geometry}
              material={materials["20_-_Default"]}
            />
          </group>
          <group
            position={[-20.1, -2.25, 2.25]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Cone05_20_-_Default_0"].geometry}
              material={materials["20_-_Default"]}
            />
          </group>
          <group
            position={[-20.1, -2.25, -2.25]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              geometry={nodes["Cone06_20_-_Default_0"].geometry}
              material={materials["20_-_Default"]}
            />
          </group>
          <group position={[-11.84, 6, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes["Box13_14_-_Default_0"].geometry}
              material={materials["14_-_Default"]}
            />
          </group>
          <group position={[-11.54, 5.74, 0.66]}>
            <mesh
              geometry={nodes["Cylinder07_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-12.14, 5.74, -0.66]}>
            <mesh
              geometry={nodes["Cylinder08_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-11.54, 5.74, -0.66]}>
            <mesh
              geometry={nodes["Cylinder09_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-12.14, 5.74, 0.66]}>
            <mesh
              geometry={nodes["Cylinder10_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-11.85, 6.24, -0.43]}>
            <mesh
              geometry={nodes["Cylinder11_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-11.85, 6.24, 0.43]}>
            <mesh
              geometry={nodes["Cylinder12_03_-_Default_0"].geometry}
              material={materials["03_-_Default"]}
            />
          </group>
          <group position={[-11.9, 7.75, 0]}>
            <mesh
              geometry={nodes["Sphere01_13_-_Default_0"].geometry}
              material={materials["13_-_Default"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tiangong/scene.gltf");
