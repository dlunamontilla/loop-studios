import { elementosHTML } from "./elementos-html.js";

const inhabilitarEnlaces = () => {
    const enlaces = elementosHTML("a[href$='#']");
    enlaces.forEach(enlace => {
        console.log(enlace.getAttribute("href"), enlace.textContent);

        enlace.addEventListener("click", function (e) {
            e.preventDefault();
        }, false);
    });
}

export { inhabilitarEnlaces };