let colors = [
    'rgba(255, 255, 255, 0.3)', 
    'rgba(255, 248, 220, 0.5)', 
    'rgba(224, 255, 255, 0.4)', 
    'rgba(218, 172, 214, 0.2)', 
    'rgba(230, 230, 250, 0.6)', 
    'rgba(255, 192, 203, 0.3)', 
    'rgba(193, 250, 204, 0.3)', 
    'rgba(255, 150, 255, 0.2)', 
    'rgba(255, 182, 193, 0.4)', 
    'rgba(255, 255, 224, 0.3)'
];


let linecolor = "lavender";

let int1;

let speed = 1;

let leaveColor = [];
for (let i = 0; i < 26; i++) {
    leaveColor[i] = colors[Math.floor(Math.random()*10)];
}






function draw() {

    let lotus = document.getElementById('lotus');

    let radius = lotus.width / 2;
    let ctx = lotus.getContext('2d');
    ctx.clearRect(0,0,radius*2,radius*2);
    let grd;

    /* pradzios taškas (apačioje) */
    let cx = radius;
    let cy = radius*1.5;


    // ketvirtas vainikas

    let angle = Math.PI * 1 ;
    let angle2 = Math.PI * 2 - 4*Math.PI/8;
    let colorToChange = Math.floor(Math.random()*6);

    for (let i = 0; i < 5; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+4)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+4)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[21+i] = colors[colorIndex];
        }


        grd=ctx.createLinearGradient(cx,cy,Math.PI*0.5+(i+4)*Math.PI/8, Math.PI*0.5+(i)*Math.PI/8);
        grd.addColorStop(1, linecolor);
        grd.addColorStop(0, leaveColor[21+i]);
        ctx.fillStyle = grd;
        ctx.strokeStyle = linecolor;
        ctx.fill();
        ctx.stroke();
    }

    // trecias vainikas

    angle = Math.PI * 1 ;
    angle2 = Math.PI * 2 - 3*Math.PI/8;
    colorToChange = Math.floor(Math.random()*7);

    for (let i = 0; i < 6; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+3)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+3)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[15+i] = colors[colorIndex];
        }

        ctx.fillStyle = leaveColor[5+i];

        // grd=ctx.createLinearGradient(cx,cy,Math.PI*0.5+(i+3)*Math.PI/8, Math.PI*0.5+(i)*Math.PI/8);
        // grd.addColorStop(1, "lavenderblush");
        // grd.addColorStop(0, leaveColor[15+i]);
        ctx.fill();
        ctx.stroke();

    }

    //antras vainikas

    angle = Math.PI * 1 ;
    angle2 = Math.PI * 2 - 2*Math.PI/8;
    colorToChange = Math.floor(Math.random()*8);


    for (let i = 0; i < 7; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);
        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
        ctx.arc(x1, y1, radius, Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i+2)*Math.PI/8, false);
        ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+2)*Math.PI/8, false);

        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[8+i] = colors[colorIndex];
        }

        ctx.fillStyle = leaveColor[8+i];

        // grd=ctx.createLinearGradient(cx,cy,Math.PI*0.5+(i+2)*Math.PI/8, Math.PI*0.5+(i)*Math.PI/8);
        // grd.addColorStop(1, "mistyrose");
        // grd.addColorStop(0, leaveColor[8+i]);

        ctx.fill();
        ctx.stroke();

    }

    // pirmas vainikas

    angle = Math.PI * 1;
    angle2 = Math.PI * 2 - Math.PI/8;
    colorToChange = Math.floor(Math.random()*9);

    for (let i = 0; i < 8; i++) {

        let x1 = cx + radius * Math.sin(angle);
        let y1 = cy + radius * Math.cos(angle);

        let x2 = cx + radius * Math.sin(angle2);
        let y2 = cy + radius * Math.cos(angle2);

        angle -= Math.PI/8;
        angle2 -= Math.PI/8;

        ctx.beginPath();
            ctx.arc(x1, y1, radius, Math.PI*0.5+i*Math.PI/8, Math.PI*0.5+(i+1)*Math.PI/8, false);
            ctx.arc(x2, y2, radius, Math.PI*1.5+i*Math.PI/8, Math.PI*1.5+(i+1)*Math.PI/8, false);
        if (i == colorToChange) {
            colorIndex = Math.floor(Math.random()*10);
            leaveColor[i] = colors[colorIndex];
        }

        ctx.fillStyle = linecolor;

        // grd=ctx.createLinearGradient(cx,cy,Math.PI*0.5+(i)*Math.PI/8, Math.PI*0.5+(i)*Math.PI/8);
        // grd.addColorStop(1, "lavenderblush");
        // grd.addColorStop(0, leaveColor[i]);

        ctx.fill();
        ctx.stroke();

    }

    clearInterval(int1);
    let wait = 500*speed+Math.floor(Math.random()*2500*speed);
    int1 = setInterval(draw, wait);
}



function lotus() {
    int1 = setInterval(draw, 20);
}

function lotusBliss() {
    speed = 0.05;
}

function lotusCalm() {
    speed = 1;
}
