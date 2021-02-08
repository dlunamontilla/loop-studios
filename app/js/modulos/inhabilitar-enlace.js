import { elementoHTML, elementosHTML } from "./elementos-html.js";
import { evaluar, isNull } from "./evaluar.js";

const inhabilitarEnlaces = () => {
    const enlaces = elementosHTML("a[href$='#']");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
        }, false);
    });

    const inicios = elementosHTML(".logo__enlace");
    inicios.forEach(inicio => {
        inicio.addEventListener("click", () => {
            location.href = "#";
        }, false);
    });

    const salir = elementoHTML("#menu-salir");
    if (!isNull(salir))
        salir.addEventListener("click", () => {
            history.back();
        });
}

export { inhabilitarEnlaces };