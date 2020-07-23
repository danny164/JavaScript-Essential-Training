const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute('alt');

var captionElement = document.createElement("figcaption");

// var captionText = document.createTextNode(altText); // using on old browsers
// captionElement.appendChild(captionText);
// FEATURED.appendChild(captionElement);

captionElement.append(altText);
FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");
