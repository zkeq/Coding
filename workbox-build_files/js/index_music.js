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
    Notiflix.Notify.success('Music: 和宇宙的温柔关联');
    Notiflix.Notify.success('Click here to pause', () => {
        voiceStop();
    });
}
function voiceStop () {
    Notiflix.Notify.success('Pause: 和宇宙的温柔关联');
    auio.pause();
}
let times = 0;
window.onload = function(){
Notiflix.Notify.init({
    position: 'left-top',
    distance: '80px',
})
NProgress.done();
voiceInit()
document.getElementById("body-wrap").addEventListener("click", function(){
    if (times === 0) {
        voicePaly();
    }
    times++;
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
    }
}, 200)


$(document).on('pjax:send', function() {
    NProgress.start();
})


$(document).on('pjax:complete', function() {
    NProgress.done();
})