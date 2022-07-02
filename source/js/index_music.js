var auio;
function voicePaly () {
    auio = "https://media.onmicrosoft.cn/Tales%20From%20The%20Loop%20S01E03%20Stasis%20%20%5B2160p%20NV%2010bit%20Joy%5D_01.flac";
    auio = new Audio(auio); 
    auio.loop = true;
    auio.play();
}
document.getElementById("body-wrap").addEventListener("click", function(){
    voicePaly();
  });