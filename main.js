canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";

var last_pos_x, last_pos_y;

color = "purple";
width_line = 5;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouse_up", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_x = e.clientX - canvas.offsetLeft;
    current_pos_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width_line;
       
       ctx.moveTo(last_pos_x,last_pos_y);
       ctx.lineTo(current_pos_x,current_pos_y);
       ctx.stroke();
    }
    last_pos_x = current_pos_x;
    last_pos_y = current_pos_y;
}
