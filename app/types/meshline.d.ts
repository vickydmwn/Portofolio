declare module "meshline" {
  import * as THREE from "three";

  export class MeshLineGeometry extends THREE.BufferGeometry {
    constructor();
    setPoints(points: THREE.Vector3[]): void;
  }

  export class MeshLineMaterial extends THREE.ShaderMaterial {
    constructor(parameters?: any);
  }
}
