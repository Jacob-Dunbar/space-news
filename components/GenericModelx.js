import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/generic/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -99.18]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object_6.geometry}
                material={materials.Apollo_Metal}
              />
              <group position={[0, -4.7, 0]}>
                <group position={[0, -0.2, 0]}>
                  <mesh
                    geometry={nodes.Object_13_1.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group position={[0, -0.43, 0]}>
                  <mesh
                    geometry={nodes.Object_15.geometry}
                    material={materials.material_0}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_10.geometry}
                  material={materials.material_0}
                />
                <group position={[-1.95, 0.13, 0]}>
                  <group position={[-0.04, 0, 0]} rotation={[0, 0, 0.05]}>
                    <group
                      position={[0, 1.51, 0]}
                      rotation={[0, 0, -Math.PI / 2]}
                    >
                      <group position={[0, -0.04, 0]}>
                        <mesh
                          geometry={nodes.Object_23_1.geometry}
                          material={materials.material_0}
                        />
                      </group>
                      <mesh
                        geometry={nodes.Object_21_1.geometry}
                        material={materials.material_0}
                      />
                    </group>
                    <mesh
                      geometry={nodes.Object_19.geometry}
                      material={materials.material_0}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_17.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group position={[0, 3.1, 0]}>
                  <mesh
                    geometry={nodes.Object_25.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group position={[0, 2.14, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <mesh
                    geometry={nodes.Object_27.geometry}
                    material={materials.material_0}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_8.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
            </group>
            <group position={[0, 0, -102.41]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, -3.22, 0]}>
                <mesh
                  geometry={nodes.Object_32.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group position={[0, 1.12, 0]} rotation={[0, Math.PI / 4, 0]}>
                <mesh
                  geometry={nodes.Object_34.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 1.12, 0]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
              >
                <mesh
                  geometry={nodes.Object_36.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 1.12, 0]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
              >
                <mesh
                  geometry={nodes.Object_38.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 1.12, 0]} rotation={[0, -Math.PI / 4, 0]}>
                <mesh
                  geometry={nodes.Object_40.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 0.56, 0]} rotation={[0, 0.44, Math.PI / 4]}>
                <mesh
                  geometry={nodes.Object_42.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 0.56, 0]} rotation={[Math.PI, 1.13, -2.36]}>
                <mesh
                  geometry={nodes.Object_44.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 0.56, 0]} rotation={[Math.PI, -0.44, -2.36]}>
                <mesh
                  geometry={nodes.Object_46.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 0.56, 0]} rotation={[0, -1.13, Math.PI / 4]}>
                <mesh
                  geometry={nodes.Object_48.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 0.56, 0]}
                rotation={[0, -0.44, -Math.PI / 4]}
                scale={[-1, 1, 1]}
              >
                <mesh
                  geometry={nodes.Object_50.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 0.56, 0]}
                rotation={[0, 1.13, -Math.PI / 4]}
                scale={[-1, 1, 1]}
              >
                <mesh
                  geometry={nodes.Object_52.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 0.56, 0]}
                rotation={[Math.PI, 0.44, 2.36]}
                scale={[-1, 1, 1]}
              >
                <mesh
                  geometry={nodes.Object_54.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 0.56, 0]}
                rotation={[-Math.PI, -1.13, 2.36]}
                scale={[-1, 1, 1]}
              >
                <mesh
                  geometry={nodes.Object_56.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.6, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  geometry={nodes.Object_58.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.6, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_60.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.6, 0]}
                rotation={[Math.PI, 0, Math.PI / 2]}
              >
                <mesh
                  geometry={nodes.Object_62.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.6, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_64.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.35, 0]} rotation={[0, 0, -1.17]}>
                <mesh
                  geometry={nodes.Object_66.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.09, 0]} rotation={[0, 0, -Math.PI / 2]}>
                <mesh
                  geometry={nodes.Object_68.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.09, 0]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_70.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.09, 0]}
                rotation={[Math.PI, 0, Math.PI / 2]}
              >
                <mesh
                  geometry={nodes.Object_72.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.09, 0]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_74.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.35, 0]}
                rotation={[-1.17, Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_76.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.35, 0]} rotation={[Math.PI, 0, 1.97]}>
                <mesh
                  geometry={nodes.Object_78.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.35, 0]}
                rotation={[1.17, -Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_80.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.83, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <mesh
                  geometry={nodes.Object_82.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.83, 0]}
                rotation={[-Math.PI / 4, Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_84.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.83, 0]} rotation={[Math.PI, 0, 2.36]}>
                <mesh
                  geometry={nodes.Object_86.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.83, 0]}
                rotation={[Math.PI / 4, -Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_88.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.83, 0]} rotation={[0, 0, -Math.PI / 4]}>
                <mesh
                  geometry={nodes.Object_90.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.83, 0]}
                rotation={[-Math.PI / 4, Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_92.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -0.83, 0]} rotation={[Math.PI, 0, 2.36]}>
                <mesh
                  geometry={nodes.Object_94.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, -0.83, 0]}
                rotation={[Math.PI / 4, -Math.PI / 2, 0]}
              >
                <mesh
                  geometry={nodes.Object_96.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 1.02, 0.6]} rotation={[-Math.PI / 6, 0, 0]}>
                <mesh
                  geometry={nodes.Object_98.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                position={[0.6, 1.02, 0]}
                rotation={[-Math.PI / 2, Math.PI / 3, Math.PI / 2]}
              >
                <mesh
                  geometry={nodes.Object_100.geometry}
                  material={materials.Black}
                />
              </group>
              <group position={[0, 1.02, -0.6]} rotation={[-2.62, 0, -Math.PI]}>
                <mesh
                  geometry={nodes.Object_102.geometry}
                  material={materials.Black}
                />
              </group>
              <group
                position={[-0.6, 1.02, 0]}
                rotation={[-Math.PI / 2, -Math.PI / 3, -Math.PI / 2]}
              >
                <mesh
                  geometry={nodes.Object_104.geometry}
                  material={materials.Black}
                />
              </group>
              <group position={[0, 0.56, 0]}>
                <mesh
                  geometry={nodes.Object_106.geometry}
                  material={materials.material_0}
                />
              </group>
              <mesh
                geometry={nodes.Object_29.geometry}
                material={materials.White}
              />
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials.Black}
              />
            </group>
            <group position={[0, 0, -90.94]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object_108.geometry}
                material={materials.material_0}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object_112.geometry}
                material={materials.Saturn_V_Main}
              />
              <group rotation={[0, Math.PI / 2, 0]}>
                <mesh
                  geometry={nodes.Object_114.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group rotation={[-Math.PI, 0, -Math.PI]}>
                <mesh
                  geometry={nodes.Object_116.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                  geometry={nodes.Object_118.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group position={[0, 4.28, 0]} scale={[1, 1, 0.96]}>
                <group
                  position={[0, -2.31, 0]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                >
                  <mesh
                    geometry={nodes.Object_122.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group
                  position={[-0.97, 1.85, 0.95]}
                  rotation={[-Math.PI, 0.64, -Math.PI]}
                >
                  <mesh
                    geometry={nodes.Object_124.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group
                  position={[-0.97, 1.45, 0.95]}
                  rotation={[-Math.PI, 0.64, -Math.PI]}
                >
                  <mesh
                    geometry={nodes.Object_126.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group
                  position={[-0.97, 1.05, 0.95]}
                  rotation={[-Math.PI, 0.64, -Math.PI]}
                >
                  <mesh
                    geometry={nodes.Object_128.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_120.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group position={[3.5, 4.28, 3.5]} scale={[1, 1, 0.96]}>
                <group position={[0, -2.31, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <mesh
                    geometry={nodes.Object_132.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.85, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_134.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.45, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_136.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.05, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_138.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_130.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group
                position={[3.5, 4.28, -3.5]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.96, 1, 1]}
              >
                <group position={[0, -2.31, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <mesh
                    geometry={nodes.Object_142.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.85, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_144.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.45, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_146.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.05, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_148.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_140.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group
                position={[-3.5, 4.28, -3.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 0.96]}
              >
                <group position={[0, -2.31, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <mesh
                    geometry={nodes.Object_152.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.85, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_154.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.45, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_156.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.95, 1.05, -0.98]} rotation={[0, 0.79, 0]}>
                  <mesh
                    geometry={nodes.Object_158.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_150.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group
                position={[-3.5, 4.28, 3.5]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.96, 1, 1]}
              >
                <group position={[0, -2.31, 0]} rotation={[0, Math.PI / 4, 0]}>
                  <mesh
                    geometry={nodes.Object_162.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.85, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_164.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.45, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_166.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <group position={[-0.99, 1.05, -0.94]} rotation={[0, 0.75, 0]}>
                  <mesh
                    geometry={nodes.Object_168.geometry}
                    material={materials.Apollo_Metal}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_160.geometry}
                  material={materials.Apollo_Metal}
                />
              </group>
              <group position={[0, 6.54, 0]} scale={[1, 1, 0.96]}>
                <mesh
                  geometry={nodes.Object_170.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 6.56, 0]} scale={[1, 1, 0.96]}>
                <mesh
                  geometry={nodes.Object_172.geometry}
                  material={materials.material_0}
                />
              </group>
              <group scale={[1, 1, 0.96]}>
                <mesh
                  geometry={nodes.Object_174.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group
                position={[0, 6.47, 0]}
                rotation={[0, 0.79, 0]}
                scale={[0.98, 1, 0.98]}
              >
                <mesh
                  geometry={nodes.Object_176.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[0, 6.47, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[0.96, 1, 1]}
              >
                <mesh
                  geometry={nodes.Object_178.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 9.43, 0]}>
                <mesh
                  geometry={nodes.Object_180.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group
                position={[-0.98, 6.4, -5.19]}
                rotation={[-Math.PI, 1.37, -Math.PI]}
              >
                <mesh
                  geometry={nodes.Object_182.geometry}
                  material={materials.material_0}
                />
              </group>
              <mesh
                geometry={nodes.Object_110.geometry}
                material={materials.Saturn_V_Main}
              />
            </group>
            <group position={[0, 0, -42.1]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0.72, 4.59, 3.61]} rotation={[0, -1.37, -0.59]}>
                <mesh
                  geometry={nodes.Object_186.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[3.6, 4.59, 0.72]} rotation={[0, -0.2, -0.59]}>
                <mesh
                  geometry={nodes.Object_188.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[3.6, 4.59, -0.72]} rotation={[0, 0.2, -0.59]}>
                <mesh
                  geometry={nodes.Object_190.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0.72, 4.59, -3.6]} rotation={[0, 1.37, -0.59]}>
                <mesh
                  geometry={nodes.Object_192.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-0.72, 4.59, -3.6]}
                rotation={[Math.PI, 1.37, 2.55]}
              >
                <mesh
                  geometry={nodes.Object_194.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-3.61, 4.59, -0.72]}
                rotation={[-Math.PI, 0.2, 2.55]}
              >
                <mesh
                  geometry={nodes.Object_196.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-3.61, 4.59, 0.72]}
                rotation={[-Math.PI, -0.2, 2.55]}
              >
                <mesh
                  geometry={nodes.Object_198.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-0.72, 4.59, 3.61]}
                rotation={[-Math.PI, -1.37, 2.55]}
              >
                <mesh
                  geometry={nodes.Object_200.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 3.94, 0]} rotation={[0, Math.PI / 4, 0]}>
                <mesh
                  geometry={nodes.Object_202.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 2.31, 0]} scale={[0.57, 0.53, 0.57]}>
                <mesh
                  geometry={nodes.Object_204.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[1.95, 2.31, -1.95]}
                rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                scale={[0.57, 0.53, 0.57]}
              >
                <mesh
                  geometry={nodes.Object_206.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-1.95, 2.31, 1.95]}
                rotation={[0, Math.PI / 4, 0]}
                scale={[0.57, 0.53, 0.57]}
              >
                <mesh
                  geometry={nodes.Object_208.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-1.95, 2.31, -1.95]}
                rotation={[0, -Math.PI / 4, 0]}
                scale={[0.57, 0.53, 0.57]}
              >
                <mesh
                  geometry={nodes.Object_210.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[1.95, 2.31, 1.95]}
                rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                scale={[0.57, 0.53, 0.57]}
              >
                <mesh
                  geometry={nodes.Object_212.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                position={[-2.04, 5.56, -4.87]}
                rotation={[-Math.PI, 1.16, -Math.PI]}
              >
                <mesh
                  geometry={nodes.Object_214.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 2.92, 0]}>
                <group rotation={[0, Math.PI / 4, 0]}>
                  <group rotation={[0, -Math.PI / 4, 0]}>
                    <mesh
                      geometry={nodes.Object_219.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <mesh
                  geometry={nodes.Object_216.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group position={[0, 7.84, 0]} rotation={[0, 0.61, 0]}>
                <group rotation={[0, -Math.PI / 2, 0]}>
                  <mesh
                    geometry={nodes.Object_222.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group rotation={[-Math.PI, 0.11, -Math.PI]}>
                  <mesh
                    geometry={nodes.Object_224.geometry}
                    material={materials.material_0}
                  />
                </group>
              </group>
              <mesh
                geometry={nodes.Object_184.geometry}
                material={materials.Saturn_V_Main}
              />
            </group>
            <group position={[0, 0, -78.49]} rotation={[-Math.PI / 2, 0, 0]}>
              <group position={[0, -2.73, -3.19]}>
                <mesh
                  geometry={nodes.Object_228.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[3.31, 1.87, 0]}>
                <mesh
                  geometry={nodes.Object_230.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, -7.09, 0]} scale={[0.57, 0.53, 0.57]}>
                <mesh
                  geometry={nodes.Object_232.geometry}
                  material={materials.material_0}
                />
              </group>
              <group position={[0, 9.48, 0]}>
                <group
                  position={[2.27, 0, -2.27]}
                  rotation={[-Math.PI, Math.PI / 4, -Math.PI]}
                >
                  <group
                    position={[0, 0, -3.21]}
                    rotation={[0, -Math.PI / 4, 0]}
                  >
                    <mesh
                      geometry={nodes.Object_238.geometry}
                      material={materials.Saturn_V_Main}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_236.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group
                  position={[2.27, 0, 2.27]}
                  rotation={[0, Math.PI / 4, 0]}
                >
                  <group
                    position={[0, 0, -3.21]}
                    rotation={[0, -Math.PI / 4, 0]}
                  >
                    <mesh
                      geometry={nodes.Object_242.geometry}
                      material={materials.Saturn_V_Main}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_240.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group
                  position={[-2.27, 0, -2.27]}
                  rotation={[-Math.PI, -Math.PI / 4, -Math.PI]}
                >
                  <group
                    position={[0, 0, -3.21]}
                    rotation={[0, -Math.PI / 4, 0]}
                  >
                    <mesh
                      geometry={nodes.Object_246.geometry}
                      material={materials.Saturn_V_Main}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_244.geometry}
                    material={materials.material_0}
                  />
                </group>
                <group
                  position={[-2.27, 0, 2.27]}
                  rotation={[0, -Math.PI / 4, 0]}
                >
                  <group
                    position={[0, 0, -3.21]}
                    rotation={[0, -Math.PI / 4, 0]}
                  >
                    <mesh
                      geometry={nodes.Object_250.geometry}
                      material={materials.Saturn_V_Main}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Object_248.geometry}
                    material={materials.material_0}
                  />
                </group>
                <mesh
                  geometry={nodes.Object_234.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <group position={[0, -11.59, 0]}>
                <group position={[0, 4.1, 0]} rotation={[0, 0.61, 0]}>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      geometry={nodes.Object_255.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <group position={[0, 1.54, 0]} rotation={[0, 0.61, 0]}>
                  <group rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                      geometry={nodes.Object_258.geometry}
                      material={materials.material_0}
                    />
                  </group>
                </group>
                <mesh
                  geometry={nodes.Object_252.geometry}
                  material={materials.Saturn_V_Main}
                />
              </group>
              <mesh
                geometry={nodes.Object_226.geometry}
                material={materials.Saturn_V_Main}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/generic/scene.gltf");
