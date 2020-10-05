const IMAGES = document.querySelectorAll("img");

for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    // images/testimonials/earth-800.jpg
    imgSrc = imgSrc.slice(0, -8); // images/testimonials/earth
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}
