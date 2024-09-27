function mudaFundo(img) {
    let body = document.body;

    switch(img) {
        case 'img1': body.style.backgroundImage = 'url(img1.jpg)'; break;
        case 'img2': body.style.backgroundImage = 'url(img2.jpg)'; break;
        case 'img3': body.style.backgroundImage = 'url(img3.jpg)'; break;
        case 'img4': body.style.backgroundImage = 'url(img4.jpg)'; break;
        case 'img5': body.style.backgroundImage = 'url(img5.jpg)'; break;
        default: body.style.backgroundColor = 'black';
    }
}