/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* passed interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;
 vec3 x;
 vec3 y;
/* number of checks over the UV range */
uniform float checks;

void main()
{
    float dc = .5;
    float u_col = floor(v_uv.x*checks);
    float v_col = floor(v_uv.y*checks);
    float dist_u = abs(dc-fract(v_uv.x*checks));
    float dist_v = abs(dc-fract(v_uv.y*checks));
    float max_d = max(dist_u,dist_v);
    float b=-dc;
    if ( mod(u_col+v_col,2.0)>=1.0) {
        x = light;
        y = dark;
    } else {
        x = dark;
        y = light;
    }
    if (b>=0.0){
        b=b;
    }
    else{
        b=fwidth(max_d);
    }
    float final = smoothstep(dc-b,dc,max_d)/1.0;
    gl_FragColor = vec4(mix(x,y,final), 1.);
}

