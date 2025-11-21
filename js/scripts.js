

let originalMessage = "Hover \"mouse\" or press \"tab\" to enlarge photo.";

function upDate(previewPic){
    const message = document.getElementById('message');
    message.style.backgroundImage = "url('" + previewPic.src + "')";
    message.classList.add('message-active');
    message.innerHTML = 
        '<div class="image-space"></div>' +
        '<div class="alt-box">' + previewPic.alt + '</div>';
}

function unDo(){
    const message = document.getElementById('message');
    message.style.backgroundImage = "none";
    message.classList.remove('message-active');
    message.innerHTML = '<p>' + originalMessage + '</p>';
}

document.addEventListener('DOMContentLoaded', function() {
    let allImages = document.querySelectorAll('.preview');
    for(let i = 0; i < allImages.length; i++) {
        allImages[i].setAttribute('tabindex', '0');
        allImages[i].onfocus = function() { upDate(this); };
        allImages[i].onblur = function() { unDo(); };
    }
});

