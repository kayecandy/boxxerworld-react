#ifdef OPAQUE
    diffuseColor.a = 1.0;
#endif


#ifdef USE_TRANSMISSION
    diffuseColor.a *= material.transmissionAlpha;
#endif

vec4 outColor = vec4( outgoingLight, diffuseColor.a );
vec3 color = vec3(1, 0, 0);

// this makes sure we don't render the texture also on the back of the object
vec3 projectorDirection = normalize(projPosition - vWorldPosition.xyz);
float dotProduct = dot(vNormal2, projectorDirection);

if (dotProduct < 0.0) {
    outColor = vec4(color, 0);
}



gl_FragColor = outColor;