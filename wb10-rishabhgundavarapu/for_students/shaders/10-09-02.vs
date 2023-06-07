/*
 * Simple Shader
 * The student should make this more interesting, but the interesting parts
 * might be the fragment shader.
  */

varying vec2 v_uv;
uniform sampler2D colormap;
varying vec3 lighting;
void main() {
    v_uv = uv;
    float height = texture2D(colormap,uv).y;    // get the green value
    
    // alter the position by raising it by the height
    // we know the direction from the normal (which should be a unit vector)
    vec3 pos = position + height*normal *.4;
    
    // the main output of the shader (the vertex position)
    gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    
    // compute the view-space normal and pass it to fragment shader
    lighting = normalMatrix * normal;
}

