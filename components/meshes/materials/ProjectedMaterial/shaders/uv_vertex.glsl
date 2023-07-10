vNormal2 = mat3(meshMatrix) * normal;
vWorldPosition =  meshMatrix * vec4(position, 1.0);
vTexCoords = projectionMatrixCamera * viewMatrixCamera * vWorldPosition;

projectionUv = (vTexCoords.xy / vTexCoords.w) * 0.5 + 0.5;

#ifdef USE_UV
	// vUv = vec3( uv, 1 ).xy;
	
    vUv = mat2(uvTransform) * projectionUv;
#endif

#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( projectionUv, 1 ) ).xy;

    // vMapUv = mat2(mapTransform) * projectionUv;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( projectionUv, 1 ) ).xy;

#endif