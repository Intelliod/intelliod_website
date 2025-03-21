import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

function Model(props) {
  const glbUrl = "https://digitaltwin-data.s3.ap-south-1.amazonaws.com/glb/KNTYS00322A_Model_2.glb";
  const { nodes, materials } = useGLTF(glbUrl);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 3, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0_Part_0.geometry}
          material={nodes.Mesh_0_Part_0.material}
        />
      </group>
    </group>
  );
}

export default Model;

// Preload the model for performance optimization
useGLTF.preload("https://digitaltwin-data.s3.ap-south-1.amazonaws.com/glb/KNTYS00322A_Model_2.glb");
