/* simplest possible fragment shader - just a constant color */
/* but a wrinkle: we pass the color from the javascript program in a uniform */
uniform vec3 color;

// We also passed in the time as a uniform (for bonus exercise)
uniform float time;

void main()
{
    gl_FragColor = vec4(sin(time*5.0)/2.0+0.5,color[1],color[2], 1);
}

