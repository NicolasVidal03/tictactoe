export class Jugador{
    constructor(nombre, simbolo){
        this._nombre = nombre;
        this._simbolo = simbolo;
    }

    get getNombre() {
        return this._nombre;
    }
    setNombre(nombreNew){
        this._nombre = nombreNew;
    }
    
    get getSimbolo() {
        return this._simbolo;
    }
    setNombre(simboloNew){
        this._simbolo = simboloNew;
    }
    
}