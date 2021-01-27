var unityInstance;
var unityInstance2;

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


$( document ).ready(function() {
    
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
    
    
});


  
