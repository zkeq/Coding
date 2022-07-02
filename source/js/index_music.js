var auio;
NProgress.start()
function voiceInit () {
    auio = "https://media.onmicrosoft.cn/backgroud.mp3";
    auio = new Audio(auio); 
    auio.loop = true; 
    auio.volume = 0.2;
}
function voicePaly () {
    auio.play();
}
function voiceStop () {
    auio.pause();
}
window.onload = function(){
NProgress.done();
voiceInit()
document.getElementById("body-wrap").addEventListener("click", function(){
    voicePaly();
    });
let ap = aplayers[0];
ap.on('play', function () {
    voiceStop();
});
ap.on('pause', function () {
    voicePaly();
});
}
setInterval(function () {
    if (NProgress.status !== null) {
        NProgress.inc();
        console.log(NProgress.status);
    }
}, 200)


$(document).on('pjax:send', function() {
    NProgress.start();
})


$(document).on('pjax:complete', function() {
    NProgress.done();
})