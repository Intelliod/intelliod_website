import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import * as THREE from 'three';
import Lights from './Lights';
import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera 
        makeDefault 
        position={[2, -2, 16]} // Move the camera slightly to the right to shift the model to the left
      />

      <Lights />

      {/* Adjust the OrbitControls to maintain the left shift */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(1, 3, 0)}  // Shift the controls target slightly right so model stays left
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      {/* Model Group */}
      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [0.15, 0.15, 0.15] : [0.01, 0.02, 0.02]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
