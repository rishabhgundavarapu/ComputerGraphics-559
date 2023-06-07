/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
varying vec2 v_uv;
/* colors for the checkerboard */
uniform vec3 light;
uniform vec3 dark;
const vec3 lightdirection = vec3(1,1,1);
/* number of checks over the UV range */
uniform float checks;
varying vec3 lighting;
void main()
{   float checks=8.0;
    float fortnut = max(0.0,dot(normalize(lighting), lightdirection));
    float dc = .5;
    float u_col = floor(v_uv.x*checks);
    float u_stripe = mod(u_col,2.0);
    float dist_u = abs(dc-mod(v_uv.x*checks,1.0));
    float v_col = floor(v_uv.y*checks);
    float v_stripe = mod(v_col,2.0);
    float dist_v = abs(dc-mod(v_uv.y*checks,3.0));
    float meow2 = mod(floor(v_uv.x*checks)+floor(v_uv.y*checks),2.0);
    float edge = max(dist_u,dist_v);
    float meow = step(dc,edge);
    if (meow2>dc){ 
        meow=0.7-meow;
        }
    gl_FragColor = vec4(mix(light,dark,meow)*fortnut, 1.);
}

