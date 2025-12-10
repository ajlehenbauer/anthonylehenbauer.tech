var unityInstance;
var letterSpace = 5;
var letterRate = .01;
var filter = [false,false,false];
//unity, web, interactive


function startGame(game){
       
    if(game == "giraffe"){
        $('#giraffeContainer').removeClass('hidden');
        $('#giraffeContainer').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');
        unityInstance = UnityLoader.instantiate("giraffeContainer", "GGBuild/UGGWebBuild.json", {onProgress: UnityProgress});
    }
    else if(game =="worm"){
        $('#wormholeContainer').removeClass('hidden');
        $('#wormholeContainer').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');
        unityInstance = UnityLoader.instantiate("wormholeContainer", "WormholeBuild/web build.json", {onProgress: UnityProgress});
    }
    else if(game =="ca"){
        $('#caContainer').removeClass('hidden');
        $('#caContainer').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');
        //unityInstance = UnityLoader.instantiate("wormholeContainer", "WormholeBuild/web build.json", {onProgress: UnityProgress});
    }

}

function openNav(number) {
    switch(number){
        case(0):
        document.getElementById("CAOverlay").style.width = "100%";
        break;
        case(1):
        document.getElementById("ShieldsOverlay").style.width = "100%";
        break;
        case(2):
        document.getElementById("GiraffeOverlay").style.width = "100%";
        break;
        case(3):
        document.getElementById("MildOverlay").style.width = "100%";
        break;
        case(4):
        document.getElementById("TriviaOverlay").style.width = "100%";
        break;
    }
    
      
    }
    
    /* Close when someone clicks on the "x" symbol inside the overlay */
    function closeNav() {
        if(unityInstance != null){
            unityInstance.Quit();
            unityInstance = null;
        }
      document.getElementById("CAOverlay").style.width = "0%";
      document.getElementById("ShieldsOverlay").style.width = "0%";
      document.getElementById("GiraffeOverlay").style.width = "0%";
      document.getElementById("MildOverlay").style.width = "0%";
      document.getElementById("TriviaOverlay").style.width = "0%";
        $('.playButton').removeClass('hidden');
        $('.playButton').addClass('shown');
        $('#caContainer').removeClass('shown');
        $('#caContainer').addClass('hidden');
        $('#wormholeContainer').removeClass('shown');
        $('#wormholeContainer').addClass('hidden');
        $('#giraffeContainer').removeClass('shown');
        $('#giraffeContainer').addClass('hidden');
    }


function floatText(){

    //SET VARS
    letterSpace +=letterRate;
   if(letterSpace>10||letterSpace<5){
       letterRate=-letterRate;
   }
 
   //UPDATE TEXT
 
    $("#title").css("letter-spacing", letterSpace+"px");
    setTimeout(function(){floatText()},10);

 }
function setFilter(){
    if($('#unityCheck').prop('checked')){
        filter[0]=true;
    }
    else{
        filter[0]=false;
    }
    if($('#webCheck').prop('checked')){
        filter[1]=true;
    }
    else{
        filter[1]=false;
    }
    if($('#interactiveCheck').prop('checked')){
        filter[2]=true;
    }
    else{
        filter[2]=false;
    }

    organizeProjects();
}
function organizeProjects(){
    var active=0;
    $('.project-container').each(function(index){
        
        if($(this).attr('tags').indexOf("unity")>-1 && filter[0]){
            $(this).removeClass("hidden");
            active++;
        }
        else if($(this).attr('tags').indexOf("web")>-1 && filter[1]){
            $(this).removeClass("hidden");
            active++;
        }
        else if($(this).attr('tags').indexOf("interactive")>-1 && filter[2]){
            $(this).removeClass("hidden");
            active++;
        }
        else if(!filter[0] && !filter[1] && !filter[2]){
            $(this).removeClass("hidden");
            active++;
        }
        else{
            $(this).addClass("hidden");
        }
    });
}
  
