const CONFIG = {
  canvas: {
    linear: true,
    flat: true,
    camera: {
      fov: 26,
      position: [-1.3, 0, 7.2],
    },
  },
  ambientLight: {
    color: 16777215,
    groundColor: 4473924,
    intensity: 0.65,
  },
  directionalLights: [
    {
      color: 16777215,
      intensity: 0.55,
      position: [0, 6, -200],
      castShadow: false,
    },
    {
      color: 16759931,
      intensity: 0.4,
      position: [-150, 0, 200],
      castShadow: false,
    },
    {
      color: 10213119,
      intensity: 0.4,
      position: [100, 0, 200],
    },
  ],
  orbitControls: {
    minPolarAngle: Math.PI / 3,
    maxPolarAngle: Math.PI / 1.9,
    enableZoom: true,
    enableDamping: true,
    dampingFactor: 0.2,
    enableKeys: true,
    enablePan: true,
  },
};

export default CONFIG;
