const CONFIG = {
  canvas: {
    linear: true,
    flat: true,
    camera: {
      fov: 5,
      position: [-6.37546092557343, 2.1970893240496195e-15, 35.31024512625285],
    },
  },
  ambientLight: {
    color: 16777215,
    groundColor: 4473924,
    intensity: 0.7,
  },
  directionalLights: [
    {
      color: 16777215,
      intensity: 0.4,
      position: [0, 6, -200],
      castShadow: false,
    },
    {
      color: 16759931,
      intensity: 0.22,
      position: [-150, 0, 200],
      castShadow: false,
    },
    {
      color: 10213119,
      intensity: 0.35,
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
