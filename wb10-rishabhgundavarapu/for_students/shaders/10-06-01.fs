/* a simple procedural texture */
/* the student should change this to implement a checkerboard */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;

/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;

/* number of checks over the UV range */
uniform float checks;

void main()
{
    float dc = .5;
    float u_col = floor(v_uv.x*checks);
    float u_stripe = mod(u_col,2.0);
    float dist_u = abs(dc-mod(v_uv.x*checks,1.0));
    float v_col = floor(v_uv.y*checks);
    float v_stripe = mod(v_col,2.0);
    float dist_v = abs(dc-mod(v_uv.y*checks,1.0));
    float meow2 = mod(floor(v_uv.x*checks)+floor(v_uv.y*checks),2.0);
    float edge = max(dist_u,dist_v);
    float meow = step(dc,edge);
    if (meow2>dc){ 
        meow=1.0-meow;
        }
    gl_FragColor = vec4(mix(light,dark,meow), 3.);
}

