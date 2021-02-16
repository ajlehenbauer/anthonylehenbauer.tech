

var script;
var myGame;
function startShields(){

        $('#shields-container').removeClass('hidden');
        $('#shields-container').addClass('shown');
        $('.playButton').addClass('hidden');
        $('.playButton').removeClass('shown');

    var buildUrl = "ShieldsUpWeb/Build";
      var loaderUrl = buildUrl + "/ShieldsUpWeb.loader.js";
      var config = {
        dataUrl: buildUrl + "/ShieldsUpWeb.data",
        frameworkUrl: buildUrl + "/ShieldsUpWeb.framework.js",
        codeUrl: buildUrl + "/ShieldsUpWeb.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Shields Up",
        productVersion: "0.1",
      };

      var container = document.querySelector("#shields-container");
      var canvas = document.querySelector("#shields-canvas");
      var loadingBar = document.querySelector("#shields-loading-bar");
      var progressBarFull = document.querySelector("#shields-progress-bar-full");
      var fullscreenButton = document.querySelector("#shields-fullscreen-button");
      
      
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        container.className = "unity-mobile";
        config.devicePixelRatio = 1;
      } else {
       // canvas.style.position = "absolute";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
      }
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
function stopShields(){
    document.getElementById("ShieldsOverlay").style.width = "0%";
    $('#shields-container').removeClass('shown');
        $('#shields-container').addClass('hidden');
        $('.playButton').addClass('shown');
        $('.playButton').removeClass('hidden');
        myGame.Quit();
}