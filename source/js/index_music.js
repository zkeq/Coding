var auio;
NProgress.start()
function voiceInit () {
    auio = "https://media.onmicrosoft.cn/backgroud.mp3";
    auio = new Audio(auio);
    auio.loop = true;
    auio.volume = 1;
}
function voicePaly () {
    auio.play();
    Notiflix.Notify.success('Music: 和宇宙的温柔关联');
    setTimeout(function(){
        Notiflix.Notify.success('Click here to pause', () => {
            voiceStop();
        },{showOnlyTheLastOne: true});
    }, 3000);
}
function voiceStop () {
    Notiflix.Notify.success('Paused: 和宇宙的温柔关联',{showOnlyTheLastOne: true});
    auio.pause();
}
let times = 0;
window.onload = function(){
    Notiflix.Notify.init({
        position: 'center-top',
        distance: '60px',
    })
    NProgress.done();
    voiceInit()
    document.getElementById("body-wrap").addEventListener("click", function(){
        if (times === 0) {
            voicePaly();
        }
        times++;
    });
}
let initap = 0;
setInterval(function () {
    if (NProgress.status !== null) {
        NProgress.inc();
    }
    if (aplayers !== null && initap === 0) {
        setTimeout(function () {
        let ap = aplayers[0];
        ap.on('play', function () {
            voiceStop();
        });
        ap.on('pause', function () {
            voicePaly();
        });
        }, 2400);
        initap ++;
    }
}, 200)


$(document).on('pjax:send', function() {
    NProgress.start();
})


$(document).on('pjax:complete', function() {
    NProgress.done();
})