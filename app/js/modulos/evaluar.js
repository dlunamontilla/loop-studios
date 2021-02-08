const evaluar = (objeto) => {
    return Object.prototype.toString.call(objeto);
}

const isNull = (objeto) => {
    return evaluar(objeto) === "[object Null]";
}

export { evaluar, isNull };