import {nextSlide, prevSlide, showCISlide, showPDSlide, showSSlide} from "./form.ts";
import {openCloseNav, colorSwitch, buttonSwitch} from "./general.ts"

let isDay: boolean = true;
let formSlide: number = 0;

document.getElementById("nav-button").addEventListener("click", openCloseNav);
document.getElementById("night-mode-button").addEventListener("click", dayNight);
document.getElementById("form-prev").addEventListener("click", callPrevSlide);
document.getElementById("form-next").addEventListener("click", callNextSlide);

function callPrevSlide(): void {
    formSlide = prevSlide(formSlide);
}

function callNextSlide(): void {
    formSlide = nextSlide(formSlide);
}

function dayNight(): void {
    isDay = buttonSwitch(isDay);
    colorSwitch(isDay);
}

