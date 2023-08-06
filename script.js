import { Juego } from "./clases/juego.js";
import { Tablero } from "./clases/tablero.js";

/*
Dilan Alvaro Alavi Gutierrez 
Luis Antonio Menacho Torrez
Alessander Gabriel Morales Montaño
Salvador Patty Camacho 
Carlos Javier Sejas Pareja
Sebastian Terrazas Kippes
Nicolas Fernando Vidal Jaldin
*/



const TicTacToe = new Juego();
let tablero = new Tablero();
let juegoEnCurso = true;
const announcer = document.querySelector('.announcer');
const btnReiniciar = document.querySelector('.reiniciar');

const btnPulsado = (e , pos) =>{
    if(juegoEnCurso)
    {
        const btn = e.target;
        const simbolo = TicTacToe.getJugAct.getSimbolo;
        let flagSimb = tablero.ponerEnPosicion(pos, simbolo);
        if(flagSimb){
            btn.innerText = simbolo;
            juegoEnCurso = tablero.validarGanador();
            TicTacToe.cambiarTurno();
            if(!juegoEnCurso){ anunciarTipo(simbolo);  }
        }
        else{
            Array.from(document.getElementsByClassName('error')).forEach(cas => {
                cas.classList.remove('error');
            });
            btn.classList.add('error');
            
        }
    }
}

let anunciarTipo = (tipo) => {
    switch(tipo){
        case "x":
            announcer.innerHTML = 'Jugador <span class="JugadorX">X</span> Gano';
            break;
        case "o":
            announcer.innerHTML = 'Jugador <span class="JugadorO">O</span> Gano';
            break;
    }
    announcer.classList.remove('hide');
}

const reiniciarJuego = () => {
    tablero.reiniciarTablero();
    juegoEnCurso = true;
    announcer.classList.add('hide');
    TicTacToe.setJugAct(TicTacToe.getJug1);
    TicTacToe.reiniciarTurno();
    Array.from(document.querySelectorAll('.casilla')).forEach(casilla => {
        casilla.innerText = '';
        casilla.style.backgroundColor = '#0B2B40';
        casilla.classList.remove('error');
        casilla.classList.remove('animacionEmpate');
    });
}



document.querySelectorAll('.casilla').forEach(
    (obj , i) => obj.addEventListener('click', (e) =>btnPulsado(e, i)));

btnReiniciar.addEventListener('click', reiniciarJuego);