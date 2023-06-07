// simple fragment shader that uses the UV value to make the color

// declare the varying variable that gets passed to the fragment shader
uniform vec3 light;
uniform vec3 dark;
 varying vec2 v_uv;

void main()
{   vec2 uv=fract(v_uv/0.25);
float d= max(abs(uv.x-0.5),abs(uv.y-0.5));
float e=fwidth(d)/2.0;
float dc=smoothstep(0.25-e,0.25+e,d);
    gl_FragColor = vec4(mix(dark,light,dc),1.0);
}

