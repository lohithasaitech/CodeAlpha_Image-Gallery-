let currentIndex = 0;
let imageList = [];

function filterImages(category){

    let buttons = document.querySelectorAll(".filters button");

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

    let photos = document.querySelectorAll(".photo");

    photos.forEach(function(photo){

        if(category === "all"){
            photo.classList.remove("hide");
        }
        else if(photo.classList.contains(category)){
            photo.classList.remove("hide");
        }
        else{
            photo.classList.add("hide");
        }

    });

}

function openImage(img){

    imageList = Array.from(
        document.querySelectorAll(".photo:not(.hide) img")
    );

    currentIndex = imageList.indexOf(img);

    document.getElementById("popup-img").src = img.src;
    document.getElementById("lightbox").style.display = "block";

}

function closeImage(){

    document.getElementById("lightbox").style.display = "none";

}

function changeImage(step){

    currentIndex += step;

    if(currentIndex >= imageList.length){
        currentIndex = 0;
    }

    if(currentIndex < 0){
        currentIndex = imageList.length - 1;
    }

    document.getElementById("popup-img").src =
        imageList[currentIndex].src;

}

window.onclick = function(e){

    let lightbox = document.getElementById("lightbox");

    if(e.target === lightbox){
        closeImage();
    }

}
