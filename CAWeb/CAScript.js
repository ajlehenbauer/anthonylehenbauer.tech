

var script;
var myGame;
function startCA(){

        $('#ca-container').removeClass('hidden');
        $('#ca-container').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');

    var buildUrl = "CAWeb/Build";
      var loaderUrl = buildUrl + "/CAWeb.loader.js";
      var config = {
        dataUrl: buildUrl + "/CAWeb.data",
        frameworkUrl: buildUrl + "/CAWeb.framework.js",
        codeUrl: buildUrl + "/CAWeb.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Cross Analysis",
        productVersion: "0.1",
      };

      var container = document.querySelector("#ca-container");
      var canvas = document.querySelector("#ca-canvas");
      var loadingBar = document.querySelector("#ca-loading-bar");
      var progressBarFull = document.querySelector("#ca-progress-bar-full");
      var fullscreenButton = document.querySelector("#ca-fullscreen-button");
      
      
     // if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      //  container.className = "unity-mobile";
      //  config.devicePixelRatio = 1;
     // } else {
       // canvas.style.position = "absolute";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
     // }
      loadingBar.style.display = "block";

      script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
            myGame = unityInstance;
          loadingBar.style.display = "none";
          
        }).catch((message) => {
          alert(message);
        });
      };
      
      document.body.appendChild(script);
}
function stopCA(){
    document.getElementById("CAOverlay").style.width = "0%";
    $('#ca-container').removeClass('shown');
        $('#ca-container').addClass('hidden');
        $('.playButton').addClass('shown');
        $('.playButton').removeClass('hidden');
        myGame.Quit();
}