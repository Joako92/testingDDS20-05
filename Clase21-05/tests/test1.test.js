import {contarLetras, sumarDosNumeros} from "../functions/functions.js"

test("Este test suma dos numeros", () => {
    expect(sumarDosNumeros(2,2)).toBe(4) //Resultado esperado
})

test("Este test cuenta los caracteres de un texto", ()=>{
    expect(contarLetras('Argentina')).toBe(9)
})