
import bg from "./background.js";
import getRandomNumber from "./utils.js";
console.log(bg);

let width=800;
let height=700;
let kill=0;



let canvas= document.getElementById("ludo");
let ctx=canvas.getContext("2d");
let canvas1=document.getElementById("ludo2");
canvas1.width=width;
canvas1.height=height;
let ctx1=canvas1.getContext("2d");


canvas.width=width;

canvas.height=height;
let steps=0;
let dice=getRandomNumber();




  let background= bg(canvas,ctx,ctx1);
  //ctx1.scale(background[0],background[1]);
//ctx1.translate(20,20);



let virtualMouse={

    x:null,
    y:null
};
window.addEventListener("mousemove",(e)=>{



virtualMouse.x=(e.x-(canvas.getBoundingClientRect().x+background.gapX))/background[0];
virtualMouse.y=(e.y-(canvas.getBoundingClientRect().y+background.gapY))/background[1];



});





  function setLineWidth(width,ctx){
    ctx.lineWidth=width/ Math.max(background[0], background[1])
    
    
    };

setLineWidth(1,ctx);
setLineWidth(1,ctx1);

const image= document.getElementById("star");

function drawStars(ctx){
    console.log(image);
    let starPoints=[[1,6],[8,1],[13,8],[6,13],[2,8],[6,2],[12,6],[8,12]];
    for(let i=0;i<starPoints.length;i++){
        ctx.drawImage(image,starPoints[i][0],starPoints[i][1],1,1);
    }



};
drawStars(ctx);



class LudorGuti{
constructor(x,y,color,ctx){
this.x=x;
this.y=y;
this.initialX=this.x;
this.initialY=this.y;
this.color=color;
this.ctx=ctx;
this.direction=["x",1];
this.unlocked=false;
this.steps=0;
this.radius=0.4;
this.unlockedX={
    "red":8 ,
    "green":1,
    "blue":13,
    "yellow":6
};


this.unlockedY={
    "red":1,
    "green":6,
    "blue":8,
    "yellow":13
}
















}

draw(){
this.ctx.fillStyle=this.color;
this.ctx.beginPath();



this.ctx.arc(this.x+0.5,this.y+0.5,this.radius,0,Math.PI*2);
this.ctx.fill();
this.ctx.stroke();

}


update(){

    

    


if(this.direction[0]==="x"){
    this.#updateX(this.direction[1]);
}else if(this.direction[0]==="y"){

    this.#updateY(this.direction[1]);
}else if(this.direction[0]==="xy"){
    this.#specialUpdate(this.direction[1],this.direction[2]);
}


}

#updateX(a){

    if(a===1){
        this.x++;
    }else if(a===0){

        this.x--;
    }else{
        console.log("error");
    }


}


#updateY(a){

    if(a===1){
        this.y++;
    }else if(a===0){

        this.y--;
    }else{
        console.log("error");
    }

}

#specialUpdate(a,b){

this.#updateX(a);
this.#updateY(b);


}

updateDirection(){
if(this.x===0 && this.y===6){
    this.direction=["x",1];
}else if(this.x===5 && this.y===6){

    this.direction=["xy",1,0];
}else if(this.x===6 && this.y===5){
this.direction=["y",0]

}else if(this.x===6 && this.y===0){
this.direction=["x",1]

}else if(this.x===7 && this.y===0){
 if(this.color=="red"){
    this.direction=["y",1]
 }

}else if(this.x===8 && this.y===0){
 this.direction=["y",1];

}else if(this.x===8 && this.y===5){
    this.direction=["xy",1,1]

}else if(this.x===9 && this.y===6){
        this.direction=["x",1]
}else if(this.x===14 && this.y===6){

this.direction=["y",1]
}else if(this.x===14 && this.y===7){
if(this.color=="blue"){
    this.direction=["x",0]
}

}else if(this.x===14 && this.y===8){
this.direction=["x",0]
}else if(this.x===9 && this.y===8){
this.direction=["xy",0,1]


}else if(this.x===8 && this.y===9){
    this.direction=["y",1]
}else if(this.x===8 && this.y===14){

this.direction=["x",0]

    
}else if(this.x===7 && this.y===14){
if(this.color=="yellow"){

    this.direction=["y",0]
}

}else if(this.x===6 && this.y===14){

this.direction=["y",0]

}else if(this.x===6 && this.y===9){

    this.direction=["xy",0,0]


}else if(this.x===5 && this.y===8){

    this.direction=["x",0]


}else if(this.x===0 && this.y===8){

this.direction=["y",0]

}else if(this.x===0 && this.y===7){

    if(this.color==="green"){
        this.direction=["x",1]
    }
}else if(this.x==1 && this.y==6 ){

this.direction=["x",1];

}else if(this.x==8 && this.y==1 ){

this.direction=["y",1]

}else if(this.x==13 && this.y==8 ){
this.direction=["x",0]


}else if(this.x==6 && this.y==13 ){
this.direction=["y",0];


}


};

collisionDetection(x,y){
    let dx=((this.x+0.5)+0.4)-(x+0.1);
    let dy=((this.y+0.5)+0.4)-(y+0.1);
    let ret;

    let distance= Math.sqrt(dx*dx+dy*dy);
    if(distance<0.4+0.1){

            return "yes"
        
    }else{
        return "no"
    }

    




}














};


let yellow= [[new LudorGuti(2,11,"yellow",ctx1),new LudorGuti(3,11,"yellow",ctx1),new LudorGuti(2,12,"yellow",ctx1),new LudorGuti(3,12,"yellow",ctx1)],["yellow"]];
let red= [[new LudorGuti(11,2,"red",ctx1),new LudorGuti(12,2,"red",ctx1),new LudorGuti(11,3,"red",ctx1),new LudorGuti(12,3,"red",ctx1)],["red"]];
let green= [[new LudorGuti(2,2,"green",ctx1),new LudorGuti(3,2,"green",ctx1),new LudorGuti(2,3,"green",ctx1),new LudorGuti(3,3,"green",ctx1)],["green"]];
let blue= [[new LudorGuti(11,11,"blue",ctx1),new LudorGuti(12,11,"blue",ctx1),new LudorGuti(11,12,"blue",ctx1),new LudorGuti(12,12,"blue",ctx1)],["blue"]];
 //6 13
//,new LudorGuti(3,11,"yellow",ctx1),new LudorGuti(2,12,"yellow",ctx1),new LudorGuti(3,12,"yellow",ctx1)

function drawey(guti){
   
    for(let i=0;i<guti[0].length;i++){
        guti[0][i].draw();
    
    };

};





let diceValue=[];


function calDiceValue(){
    let value=1+Math.floor(Math.random()*6);
    do{
        
        value=1+Math.floor(Math.random()*6);
      
      // diceValue.push(value);
       diceValue.push(value);

       if(diceValue.length>3){
        console.log("done it", diceValue);
            diceValue=[value];
           
            

       }

    
    }while(

    diceValue[diceValue.length-1]===6 ||
    diceValue.length===0 



    )


    console.log(diceValue);
    document.getElementById("div").innerText=`${diceValue}`;

    return diceValue;
    



};





function drawAllguti(guti,ctx1,canvas1){
    ctx1.clearRect(0,0,canvas1.width,canvas1.height);
    guti[0].forEach((obj)=>{
       
       // console.log(obj);
        obj.draw()
    })




};







let dv=0;
let sequence=[red,green,yellow,blue];

let sequenceNavigator=0;
sequence.forEach((obj)=>{

    drawey(obj);
    

});

function collisionDetection(guti,arr){
    let ret="no";
    sequence.forEach((obj)=>{
        if(obj[1]!==arr[1]){
            obj[0].forEach((o)=>{
                if(o.x==guti.x && o.y==guti.y && ifOnStar(o)=="no"){
                    o.x=o.initialX;
                    o.y=o.initialY;
                    o.unlocked=false;
                    o.steps=0;
                    ret="yes";
                    kill++;


                }


            })




        }



    })



    return ret;





};


function ifOnStar(obj){
    let ret="no";
let starPoints=[[1,6],[8,1],[13,8],[6,13],[2,8],[6,2],[12,6],[8,12]];
for(let i=0;i<starPoints.length;i++){
if(obj.x==starPoints[i][0] && obj.y==starPoints[i][1]){

    ret= "yes";
}else{

   // return "no";
}}
return ret;


};



document.addEventListener("click",()=>{
    

    console.log(sequenceNavigator,"ser");

  
//console.log(dv);

    moveGuti(sequence[sequenceNavigator]);
    console.log(sequence[sequenceNavigator][1]);



  

/**if(sequenceNavigator<sequence.length){
    sequenceNavigator++;
        }
        if(sequenceNavigator>=sequence.length){
            sequenceNavigator=0;
        }**/



});


function iseveryoneunlocked(guti){
    let result="no";

    guti[0].forEach((obj)=>{
        if(obj.unlocked===true){
            result="yes";
        }


    });
   // console.log(result);

    return result;
  
};

function calcNetDiceValue(diceValue){
let netValue=0;
diceValue.forEach((value)=>{

netValue+=value;


});

return netValue;

};



function isEveryOneExceededLimit(guti){

let isexeccded="no";


let first=guti[0][0].steps;
let second=guti[0][1].steps;
let third=guti[0][2].steps;
let fourth=guti[0][3].steps;


if(diceValue.length>1){
for(let i=0; i<diceValue.length;i++){
if(first+diceValue[i]<57){
first+=diceValue[i];

 
}else if(second+diceValue[i]<57){

second+=diceValue[i];


}else if(third+diceValue[i]<57){

third+=diceValue[i]


}else if(fourth+diceValue[i]<57){
fourth+=diceValue[i]


}else{

isexeccded="yes"



}





}}else{
    if(first+diceValue[0]<57 && guti[0][0].unlocked===true){
        first+=diceValue[0];
        
         
        }else if(second+diceValue[0]<57 && guti[0][1].unlocked===true){
        
        second+=diceValue[0];
        
        
        }else if(third+diceValue[0]<57 && guti[0][2].unlocked===true){
        
        third+=diceValue[0]
        
        
        }else if(fourth+diceValue[0]<57 && guti[0][3].unlocked===true){
        fourth+=diceValue[0]
        
        
        }else{
        
        isexeccded="yes"
        
        
        
        }



}






return isexeccded;



}

















































function moveGuti(guti){
    
    let noDoublemove=0;
    let gutiName=guti[1][0];
    let notUpdated=true;
   // console.log(isEveryOneExceededLimit(guti));

   if((iseveryoneunlocked(guti)=="no" && diceValue[0]!==6 && diceValue[0]!==undefined )|| (isEveryOneExceededLimit(guti)=="yes" && diceValue[0]!==undefined)){
    console.log(isEveryOneExceededLimit(guti),"limit");
    console.log(iseveryoneunlocked(guti),"unlock");
    console.log(diceValue[0]);

        console.log(isEveryOneExceededLimit(guti));
diceValue=[];

if(sequenceNavigator<sequence.length){
    sequenceNavigator++;
    console.log("i changed it");
        }
        if(sequenceNavigator>=sequence.length){
            sequenceNavigator=0;
        }

    };
    
    
     guti[0].forEach((obj)=>{

        
    
       let isCollided= obj.collisionDetection(virtualMouse.x,virtualMouse.y);
       if(isCollided=="yes"){
    
        if(obj.unlocked===false && diceValue[dv]===6 && noDoublemove==0 && diceValue[dv]!=undefined){
            obj.unlocked=true;
            noDoublemove=1;
            obj.x=obj.unlockedX[`${gutiName}`];
           // console.log(obj.unlockedX[`${guti}`]);
            obj.y=obj.unlockedY[`${gutiName}`];
            obj.updateDirection();
            ctx1.clearRect(0,0,canvas1.width,canvas1.height);
            sequence.forEach((obj)=>{

                drawey(obj);
                
            
            });

            if(dv<diceValue.length){
                dv++
            }
            console.log(dv>=diceValue.length);
            if(dv>=diceValue.length){
                dv=0;
                diceValue=[];
            };
           // notUpdated=false;
        
            
        
        }else if(obj.unlocked==true && noDoublemove==0 &&  diceValue[dv]!=undefined){
        
           if(obj.steps+diceValue[dv]<57){
            for(let i=0;i<diceValue[dv];i++){
                obj.updateDirection();
                obj.update();
                ctx1.clearRect(0,0,canvas1.width,canvas1.height);
                if(i==diceValue[dv]-1){
                    collisionDetection(obj,guti);
    
                   }
                sequence.forEach((obj)=>{

                    drawey(obj);
                    
                
                });
               obj.steps++;
             
            }
            noDoublemove=1;
            if(dv<diceValue.length){
                
                dv++
            }
            console.log(dv>=diceValue.length);
            if(dv>=diceValue.length){
                dv=0;
                diceValue=[];
                if((sequenceNavigator<sequence.length) && kill==0){
                    sequenceNavigator++;
                        }else{
                            kill--;
                        };
                        if(sequenceNavigator>=sequence.length){
                            sequenceNavigator=0;
                        };
            };}

           // notUpdated=false;
            
          
            
        
        }else{
            //do nothing
            
        
      
            
            
            
        }
        
    
       }
    
    
     })
    
    
    
    
    
    
    
    
    };
















document.addEventListener("keydown",()=>{
diceValue=[];
    calDiceValue();
});

function animate(){
   // console.log(sequence[sequenceNavigator][1]);

    document.getElementById("div").style.backgroundColor=sequence[sequenceNavigator][1];
    document.getElementById("div").innerText=`${diceValue}`;
    window.requestAnimationFrame(animate);
};
animate();























//  let x=(e.x-(canvas.getBoundingClientRect().x+background.gapX))/background[0];
//let y=(e.y-(canvas.getBoundingClientRect().y+background.gapY))/background[1];
//  let collided=collisionDetection(guti[x].x,guti[x].y,guti[x].radius,virtualMouse.x,virtualMouse.y,0.1);


















