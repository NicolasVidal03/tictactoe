import { Jugador } from "./jugador.js";
import { Tablero } from "./tablero.js";


export class Juego{
    constructor(){
        this.tablero = new Tablero;
        this.jugador1 = new Jugador("jugador 1", 'x');
        this.jugador2 = new Jugador("jugador 2", 'o');
        this.jugadorActual = this.jugador1;
        this.turno = 0;
    }

    get getJugAct(){
        return this.jugadorActual;
    }

    get getJug1(){
        return this.jugador1;
    }

    setJugAct(jugadorNew){
        this.jugadorActual = jugadorNew;
    }

    reiniciarTurno(){
        this.turno = 0;
    }

    cambiarTurno(){
        const mod = this.turno % 2;
        if(mod == 0)
            this.jugadorActual = this.jugador2;
        else
            this.jugadorActual = this.jugador1;
        this.turno ++;
    }
}
