import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Iss from "./Iss.js";
// import Tiangong from "./Tiangong.js";

function CraftCanvas() {
  return (
    <div className=" h-72 w-72">
      <Canvas>
        <Suspense fallback={null}>
          {/* <ambientLight intensity={0.4} /> */}
          <spotLight
            intensity={0.7}
            angle={0.7}
            penumbra={1}
            position={[10, 80, 200]}
            color={"#FFFFFF"}
          />
          <Iss />
        </Suspense>
      </Canvas>
      ;
    </div>
  );
}

export default CraftCanvas;
