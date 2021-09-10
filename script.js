function toggle(){
    var trailer= document.querySelector(".trailer")
    var video = document.querySelector("video") //silenciar video al cerrar con la cruz
    trailer.classList.toggle("active") //activo e inactivo
    video.pause();
    video.currentTime = 0;
    
}
function toggle2(){
    var trailer2= document.querySelector(".trailer2")
    var video = document.querySelector(".video2") //silenciar video al cerrar con la cruz
    trailer2.classList.toggle("active") //activo e inactivo
    video.pause();
    video.currentTime = 0;
    
}