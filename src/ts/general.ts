let root = document.querySelector(':root');

export function openCloseNav(): void {
    let closedNav: string = document.getElementById("hidden-closed-nav").innerHTML;
    let navButton = document.getElementById("nav-button");
    let headerNav = document.getElementById("header-nav");

    if (closedNav == navButton.innerHTML) {
        navButton.innerHTML = "&#9932";
        headerNav.style.display = "flex";
    } else {
        navButton.innerHTML = "&#9776";
        headerNav.style.display = "none";
    }
}

export function buttonSwitch(isDay: boolean): boolean {
    if (isDay) {
        document.getElementById("switch-up").style.transform = "translateY(-50%)";
        return false;
    } else {
        document.getElementById("switch-up").style.transform = "translateY(0%)";
        return true;
    }
}

export function colorSwitch(isDay: boolean): void {
    if (!isDay) {
        root.style.setProperty("--bodyBackgroundColor", "#6D5D6E");
        root.style.setProperty("--headerBackgroundColor", "#393646");
        root.style.setProperty("--headerNavBackgroundColor", "#4F4557");
        root.style.setProperty("--headerNavButtonColor", "#424242");
        root.style.setProperty("--headerTextColor", "#F4EEE0");
        root.style.setProperty("--bodyTextColor", "#e6e1d5");
        root.style.setProperty("--formBackground", "#808080");
    } else {
        root.style.setProperty("--bodyBackgroundColor", "#EEE9E3");
        root.style.setProperty("--headerBackgroundColor", "#C5A586");
        root.style.setProperty("--headerNavBackgroundColor", "#E7D6C6");
        root.style.setProperty("--headerNavButtonColor", "#D4D6D5");
        root.style.setProperty("--headerTextColor", "#474747");
        root.style.setProperty("--bodyTextColor", "#363535");
        root.style.setProperty("--formBackground", "#c7c7c7");
    }
}