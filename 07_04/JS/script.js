const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    // This quite literally prevents the default behavior of the event object,
    e.preventDefault(); // and in this case the event object is a clicked link.
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

CTA.onclick = reveal;
