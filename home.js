var unityInstance;
var unityInstance2;

function startGame(game){
       
    if(game == "giraffe"){
        
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
        $('#wormModal').addClass(' animate__flipInX');
        $('#wormModal').removeClass('animate__flipOutX');
       })
       $('#wormModal').on('hidden.bs.modal', function (e) {
        unityInstance2.Quit();
        $('#wormModal').show();
        $('#wormModal').addClass('animate__flipOutX');
        $('#wormModal').removeClass(' animate__flipInX');
        $('#wormholeContainer').removeClass('shown');
        $('#wormholeContainer').addClass('hidden');
        $('.playButton').removeClass('hidden');
        $('.playButton').addClass('shown');
       })
       
       $('#giraffeModal').on('show.bs.modal', function (e) {
        $('#giraffeModal').addClass(' animate__flipInX');
        $('#giraffeModal').removeClass('animate__flipOutX');
       })
       $('#giraffeModal').on('hidden.bs.modal', function (e) {
        unityInstance.Quit();
        $('#giraffeModal').show();
        $('#giraffeModal').addClass('animate__flipOutX');
        $('#wormMgiraffeModalodal').removeClass(' animate__flipInX');
        
        $('.playButton').removeClass('hidden');
        $('.playButton').addClass('shown');
       })
    
    
});


  
