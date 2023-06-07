/* Procedural shading example */
/* the student should make this more interesting */

/* pass interpolated variables to from the vertex */
uniform sampler2D colormap;
uniform sampler2D tex;

const vec3 lightDir = vec3(0,0,1);
varying vec2 v_uv;
varying vec3 lighting;
void main()
{    vec3 nhat = normalize(lighting);
    float light = max(0.0,dot(nhat, lightDir));
     gl_FragColor = clamp(texture2D(tex, v_uv) + texture2D(colormap, v_uv), 0.0, 1.0) * light;
}

