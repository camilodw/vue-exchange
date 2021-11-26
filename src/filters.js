import numeral from "numeral";
const dollarFilter = function(value) {
    if (!value) {
        return "$ 0";
    }
    return numeral(value).format("(0.00a)");
};
//se usa solo el export para poder exportar una funcion en especifico
export { dollarFilter };