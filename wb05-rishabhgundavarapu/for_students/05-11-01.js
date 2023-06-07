let canvas = (document.getElementById("canvas1"));
if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let context = canvas.getContext("2d");
const slider = /** @type {HTMLInputElement} */ (document.getElementById("slider"));
const checkbox = document.getElementById('chk')
function spiral(u){
    let fx = 200+ u *180 *Math.cos(8 * Math.PI* u)
    let dfx = (180 *Math.cos(8*Math.PI*u) - 2 *Math.PI * 4 * 180 * Math.sin(8* Math.PI * u) * u) // derivate of fx
    let fy = 200+ u*180*Math.sin(2 *Math.PI* 4* u)
    let dfy = (180*Math.sin(8*Math.PI*u)+ 2* Math.PI * 4 * 180 * Math.cos(8 * Math.PI *u) *u) // derivative of fy
    return [fx,dfx,fy,dfy]
}
function draw() {
    context.fillStyle = "red";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 5;
    const sliderval=Number(slider.value)
    console.log('meow')
    if(checkbox.checked){
        console.log('checked')
        console.log(sliderval)
        for(let i =0;i<sliderval;i++){
            let u =  i / sliderval; // parameter of current point
            let unext = (i+1)/sliderval
            let coords=spiral(u)
            let coords2=spiral(unext)
            console.log(coords)
            context.strokeStyle='red';
            context.beginPath();
            context.moveTo(coords[0],coords[2])
            context.lineTo(coords2[0],coords2[2])
            //context.closePath();
            context.stroke();
        }
    }
    else{
        for (let i=0; i<sliderval+1; i++) {
            let u=i/sliderval;
            let coords=spiral(u)
            context.fillRect(coords[0] - 1, coords[2] - 1, 3, 3); 
        }
    }
}
checkbox.onchange = draw;
slider.oninput = draw;
draw();