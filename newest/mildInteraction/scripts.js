

var speed = 1.3;
var mx;
var my;
var elements = [];

function coordinate(event){
    mx = event.clientX; 
    my = event.clientY; 
     
}

function destroyAll(){
$('.jar').remove();
$('.fly').remove();
$('.fly-caught').remove();
}
function animateJar(i, jar){
    
    if(i==1){
        jar = document.createElement('div');
        elements.concat([jar]);
        jar.className = 'jar';
        document.getElementById("MildOverlay").appendChild(jar);
        jar.style.top =(my-32)+"px";
        jar.style.left =(mx-32)+"px";
        jar.appendChild(document.createElement('img'));
        jar.getElementsByTagName('img')[0].className = "jar-img";
        jar.getElementsByTagName('img')[0].src = "mildInteraction/"+i+".png";
        jar.style.width = 80;
        jar.style.height = 80;
        setTimeout(function(){animateJar(i+1,jar)},125);
        return jar;
    }
    else if(i<5){
        
        jar.getElementsByTagName('img')[0].src = "mildInteraction/"+i+".png";
        setTimeout(function(){animateJar(i+1,jar)},125);
    }
    else{
        dropJar(jar);
    }
    
    
    
}
function createFlyDelay(){
    setTimeout(function(){createFly()},1000);
}
function createFly(){
    var el = document.createElement('img');
    elements.concat([el]);
    el.className = 'fly';
    el.src = "mildInteraction/fly.png";
    document.getElementById("MildOverlay").appendChild(el);
    el.style.top ="" + Math.floor(Math.random()*document.getElementById("MildOverlay").clientHeight*.90)+"px";
    el.style.left ="" + Math.floor(Math.random()*document.getElementById("MildOverlay").clientWidth)+"px";
    el.addEventListener("click",function(){
        if(el.className != 'fly-caught'){
            createFly();
            el.className = 'fly-caught';
            mx = el.offsetLeft; 
            my = el.offsetTop;
            el.style.top = '25px';
            el.style.left = '22.5px';
            animateJar(1,null).appendChild(el);
        }
    });
    console.log(el.style.top)
    flyAround(el,Math.random()*( document.getElementById("MildOverlay").clientWidth- document.getElementById("MildOverlay").clientWidth*.20)+ document.getElementById("MildOverlay").clientWidth*.10,
    Math.random()*( document.getElementById("MildOverlay").clientHeight- document.getElementById("MildOverlay").clientHeight*.20)+ document.getElementById("MildOverlay").clientHeight*.10,1,20,0);
}

function dropJar(jar){
    
    if(jar.offsetTop< document.getElementById("MildOverlay").clientHeight-85){
        jar.style.top = jar.offsetTop+2+"px";
        setTimeout(function(){dropJar(jar)},10);
    }
}
function hover(element,d,c,i){
    element.style.top=element.offsetTop+(speed*d)+"px";
    c-=speed;
    if(element.className == 'fly-caught'){
        flyAround(element,0,0,1,0,0);
    }
    else if(i>3){
        flyAround(element,Math.random()*( document.getElementById("MildOverlay").clientWidth- document.getElementById("MildOverlay").clientWidth*.20)+ document.getElementById("MildOverlay").clientWidth*.10,
            Math.random()*( document.getElementById("MildOverlay").clientHeight- document.getElementById("MildOverlay").clientHeight*.20)+ document.getElementById("MildOverlay").clientHeight*.10,1,20,0);
    }
    else if(c<0){
        setTimeout(function(){hover(element,-d,30,i+1);},100); 
    }
    else{
        setTimeout(function(){hover(element,d,c,i);},100);  
    }
}


function flyAround(element,x, y,d,c,cs){
    
    if(element.className == 'fly'){
          
        if(Math.abs(element.offsetLeft-x)<1){
            hover(element,1,30,0);
            return null;
          }
        else if(element.offsetLeft<x){
              
            element.style.left=(speed+element.offsetLeft)+"px";
          }
          else if(element.offsetLeft>x){
            
              element.style.left=(element.offsetLeft-speed)+"px";
          }
          
          element.style.top=element.offsetTop+((speed*d*Math.min(c,cs))/20)+"px";
          cs+=speed;
          c-=speed;

          if(c<0){
            c=Math.random()*30+25;
            cs=0;
              if(element.offsetTop<y){
                  if(Math.random()<.25){
                      d=-1;
                  }
                  else{
                      d=1;
                  }

              }
              else{
                if(Math.random()<.25){
                    d=1;
                }
                else{
                    d=-1;
                }
              }
          }
          setTimeout(function(){flyAround(element,x,y,d,c,cs);},30); 
    }
    else if(element.className == 'fly-caught'){
        
        element.style.top=element.offsetTop+(speed*d)+"px";
        if(element.offsetTop<20||element.offsetTop>40){
            setTimeout(function(){flyAround(element,x,y,-d,c,cs);},100); 
        }
        else{
            setTimeout(function(){flyAround(element,x,y,d,c,cs);},100); 
        }
    }
}