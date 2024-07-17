
export function prevSlide(slide: number): number {
    if (slide == 1) {
        showCISlide()
        return slide-1;
    } else if (slide == 2){
        showPDSlide()
        return slide-1;
    }
    return slide;
}

export function nextSlide(slide: number): number {
    if (slide == 0) {
        console.log("hi");
        showPDSlide();
        return slide+1;
    } else if (slide == 1){
        showSSlide();
        return slide+1;
    }
    return slide;
}

export function showCISlide(): void {
    document.getElementById("form-contact-info").style.display = "flex";
    document.getElementById("form-plan-details").style.display = "none";
    document.getElementById("form-schedule").style.display = "none";
}

export function showPDSlide(): void {
    document.getElementById("form-contact-info").style.display = "none";
    document.getElementById("form-plan-details").style.display = "flex";
    document.getElementById("form-schedule").style.display = "none";
}

export function showSSlide(): void {
    document.getElementById("form-contact-info").style.display = "none";
    document.getElementById("form-plan-details").style.display = "none";
    document.getElementById("form-schedule").style.display = "flex";
}

