/* a simple procedural texture: dots */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the dots */
uniform vec3 light;
uniform vec3 dark;

/* number of dots over the UV range */
uniform float dots;

/* how big are the circles */
uniform float radius;

void main()
{   vec2 uv=fract(v_uv/0.15);
float d= max(abs(uv.x-0.5),abs(uv.y-0.5));
float e=fwidth(d)/1.0;
float dc=smoothstep(0.35-e,0.35+e,d);
    gl_FragColor = vec4(mix(dark,light,dc),1.0);
}

