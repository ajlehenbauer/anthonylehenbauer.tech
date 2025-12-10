var unityInstance;
var unityInstance2;
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
        unityInstance = UnityLoader.instantiate("giraffeContainer", "GiraffeBuild/UGGWebBuild.json", {onProgress: UnityProgress});
    }
    else if(game =="worm"){
        $('#wormholeContainer').removeClass('hidden');
        $('#wormholeContainer').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');
        unityInstance2 = UnityLoader.instantiate("wormholeContainer", "WormholeBuild/web build.json", {onProgress: UnityProgress});
    }
}


$( document ).ready(
    
    function() {
    
    $('#wormModal').on('show.bs.modal', function (e) {
        $('#wormModal').addClass(' animate__zoomIn');
        $('#wormModal').removeClass('animate__zoomOut');
       })
       $('#wormModal').on('hidden.bs.modal', function (e) {
        if(unityInstance2!=null){
            unityInstance2.Quit();
        }
        
        $('#wormModal').show().delay(1000).hide();
        $('#wormModal').addClass('animate__zoomOut');
        $('#wormModal').removeClass(' animate__zoomIn');
        $('#wormholeContainer').removeClass('shown');
        $('#wormholeContainer').addClass('hidden');
        $('.playButton').removeClass('hidden');
        $('.playButton').addClass('shown');
        
        
       })
       
       $('#giraffeModal').on('show.bs.modal', function (e) {
        $('#giraffeModal').addClass(' animate__zoomIn');
        $('#giraffeModal').removeClass('animate__zoomOut');
       })
       $('#giraffeModal').on('hidden.bs.modal', function (e) {
        
        if(unityInstance!=null){
            unityInstance.Quit();
        }
        $('#giraffeModal').show().delay(1000).hide();
        $('#giraffeModal').addClass('animate__zoomOut');
        $('#giraffeModal').removeClass('animate__zoomIn');
        
        $('#giraffeContainer').removeClass('shown');
        $('#giraffeContainer').addClass('hidden');
        $('.playButton').removeClass('hidden');
        $('.playButton').addClass('shown');
        
       })
    
    floatText()
});

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
  
