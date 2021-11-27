
/* 
╦╔═╦ ╦╔═╗╔╦╗╔═╗
╠╩╗║║║╠═╣ ║║║ ║
╩ ╩╚╩╝╩ ╩═╩╝╚═╝
*/

const droneTracker = document.querySelector(".drone-follow");
// Taille de l'image 50


var mouseX = 0;
var mouseY = 0;
var xp = 0;
var yp = 0;

var rotate = 20

document.addEventListener('mousemove', e => {

    mouseX =  e.pageX - 25;
    mouseY =  e.pageY - 25;

    


})



setInterval(function(){

    /*
    if (xp < mouseX - 90 || xp > mouseX + 90)
    {
        xp += ((mouseX - xp)/8);
        droneTracker.style.left = xp     + "px";
    }

    if (yp < mouseY - 90 || yp > mouseY + 90)
    {
        yp += ((mouseY - yp)/8);
        droneTracker.style.top  = yp     + "px";
    }
    */
    
    
    
    
    
    xp += ((mouseX - xp)/12);

    yp += ((mouseY - yp)/12);

    droneTracker.style.left = xp     + "px";

    droneTracker.style.top  = yp     + "px";
    

    //droneTracker.style.transform = `rotate(${rotate}deg)`;

    //console.log(`Cursor : X:${mouseX} , Y:${mouseY}`);
    //console.log(`Drone  : X:${xp} , Y:${yp}`);

    var dleft = parseInt((droneTracker.style.left).substring(0, (droneTracker.style.left).length-2), 10);
    var dtop  = parseInt((droneTracker.style.top).substring (0, (droneTracker.style.top).length-2) , 10);
    var dOrientation;

    //console.log(dleft);

    //console.log(rotate%90)


    //rotate = Math.abs(mouseX - dleft) - Math.abs(mouseY - dtop);

    rotate = Math.atan2(mouseY - dtop, mouseX - dleft) * 180 / Math.PI;

    console.log(rotate);


    if ( mouseX > xp )
    {
        if (mouseY < yp)
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log('↗️');
        }
        else
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log("↘️")
        }
        
    }
    else if ( mouseX < xp )
    {
        if (mouseY < yp)
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log('↖️');
        }
        else
        {
            droneTracker.style.transform = `rotate(${rotate+90}deg)`;
            console.log("↙️")
        }
    }

    if ( xp >= mouseX-5 && xp <= mouseX+5)
    {
         //console.log("mode rotatif on")
         droneTracker.style.top  = yp-1      + "px";
         droneTracker.style.left = xp+1      + "px";
    }

}, 20);


/*
document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove('expand');

    },500);
})

*/

/*
    if (rotate>90)  rotate=90 ;
    if (rotate<-90) rotate=-90;
    //console.log(rotate%90)

    if ( mouseX > xp )
    {
        if (mouseY < yp)
        {
            // 
            droneTracker.style.transform = `rotate(${rotate}deg)`;
            console.log('↗️');
        }
        else
        {
            // bas droite
            droneTracker.style.transform = `rotate(${rotate}deg)`;
            console.log("↘️")
        }
        
    }
    else if ( mouseX < xp )
    {
        if (mouseY < yp)
        {
            droneTracker.style.transform = `rotate(${rotate}deg)`;
            console.log('↖️');
        }
        else
        {
            //bas gauche
            droneTracker.style.transform = `rotate(${rotate}deg)`;
            console.log("↙️")
        }
    }
*/