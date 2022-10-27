function init(canvas,ctx,ctx1){


    
    let gap=20;

    let p=(canvas.width-gap*2);
    let q=canvas.height-gap*2;
    let p1=canvas.width-gap;
    let q1=canvas.height-gap;



    drawBorderBox(ctx,canvas,gap,p,q);
    drawBasicLines(ctx,canvas,gap,p,q,p1,q1);
    drawPlayerBoxes(ctx,canvas,gap,p/15,q/15);
    
    ctx.translate(gap,gap);
    ctx1.translate(gap,gap);
    ctx.scale(p/15,q/15);
    ctx1.scale(p/15,q/15);
    jj(ctx,p,q);
console.log(p/15,q/15);



    let ret=[p/15,q/15];
    let mouse={
        
        0:p/15,
        1:q/15,
        gapX:gap/(p/15),
        gapY:gap/(q/15)
    }


   

    return mouse;





};














function drawBorderBox(ctx,canvas,gap,p,q){

    

    ctx.lineWidth=4;
    
    ctx.fillStyle="red";

    ctx.strokeRect(gap,gap,p,q);
    

   // drawBasicLines(ctx,canvas,gap);
    








};

function drawBasicLines(ctx,canvas,gap,p,q,p1,q1){
    ctx.lineWidth=2;
    ctx.strokeStyle="black";

  
   // drawPlayerBoxes(ctx,canvas,gap,p/15,q/15);

    for(let x=gap+(p/15);x<=(p);x+=p/15){

        ctx.beginPath();
        ctx.moveTo(x,gap);
        ctx.lineTo(x,q1);
        
        ctx.stroke();

    };


    for(let y=gap+(q/15);y<=(q);y+=q/15){

        ctx.beginPath();
        ctx.moveTo(gap,y);
        ctx.lineTo(p1,y);
        
        ctx.stroke();

    };
    








};


function drawPlayerBoxes(ctx,canvas,gap,unitX,unitY){


    ctx.fillStyle="green";
    ctx.fillRect(gap,gap,unitX*6,unitY*6);
    ctx.fillStyle="red";
    ctx.fillRect(gap+unitX*9,gap,unitX*6,unitY*6);
    ctx.fillStyle="yellow";
    ctx.fillRect(gap,gap+unitY*9,unitX*6,unitY*6);
    ctx.fillStyle="blue";
    ctx.fillRect(gap+unitX*9,gap+unitY*9,unitX*6,unitY*6);

    ctx.fillStyle="white";
    


    
    
    ctx.fillRect(gap+unitX,gap+unitY,unitX*4,unitY*4);
    ctx.fillRect(gap+unitX*10,gap+unitY,unitX*4,unitY*4);
    ctx.fillRect(gap+unitX,gap+unitY*10,unitX*4,unitY*4);
    ctx.fillRect(gap+unitX*10,gap+unitY*10,unitX*4,unitY*4);
    







};

function jj(ctx,p,q){

    ctx.fillStyle="black";
    ctx.lineWidth=2/ Math.max(p/15,q/15);


ctx.fillRect(6,6,3,3);

ctx.fillStyle="green";
for(let i=6;i<8;i++){

    ctx.fillRect(1,i,1,1);
    ctx.strokeRect(1,i,1,1);
}

for(let i=2;i<6;i++){

    ctx.fillRect(i,7,1,1);
    ctx.strokeRect(i,7,1,1)
}








for(let i=5;i>0;i--){

    ctx.fillStyle="red";
    ctx.fillRect(7,i,1,1);
    ctx.strokeRect(7,i,1,1);
    console.log(i);
    if(i===1){

        ctx.fillRect(8,i,1,1);
        ctx.strokeRect(8,i,1,1);

    };

    




};

for(let i=9;i<14;i++){

ctx.fillStyle="blue"
    ctx.fillRect(i,7,1,1);
    ctx.strokeRect(i,7,1,1);
    if(i===13){
        ctx.fillRect(i,8,1,1);
        ctx.strokeRect(i,8,1,1);

    }

};


for(let i=9;i<14;i++){
ctx.fillStyle="yellow";
ctx.fillRect(7,i,1,1);
ctx.strokeRect(7,i,1,1);
if(i===13){
    ctx.fillRect(6,i,1,1);
    ctx.strokeRect(6,i,1,1);

}



}
}



export default init;
