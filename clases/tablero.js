/*
        Índices dentro del tablero para ver jugadas ganadoras.

        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]

        ''
        
*/

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const winColor = '#529e52';

export class Tablero{
    constructor(){
        this._tablero = ['', '', '', '', '', '', '', '', ''];
    }

    ponerEnPosicion(pos, sim)
    {
        if(this._tablero[pos] == '') {
            this._tablero[pos] = sim;
            return true;
        }
        else{
            //alert("NO PUEDES HACER ESO!")
            return false;
        }
    }

    validarGanador() {
        let ganador = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = this._tablero[winCondition[0]];
            const b = this._tablero[winCondition[1]];
            const c = this._tablero[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                ganador = true;
                Array.from(document.getElementsByClassName('casilla'))
                [winCondition[0]].style.backgroundColor = winColor;
                Array.from(document.getElementsByClassName('casilla'))
                [winCondition[1]].style.backgroundColor = winColor;
                Array.from(document.getElementsByClassName('casilla'))
                [winCondition[2]].style.backgroundColor = winColor;
                break;
            }
        }
     //Ronda Ganadora
        if (ganador) {  
            return false;
        }

        if (!this._tablero.includes('')){
            document.querySelector('.announcer').innerHTML = 'Empate';
            document.querySelector('.announcer').classList.remove('hide');
            Array.from(document.getElementsByClassName('casilla')).forEach(cas => {
                cas.style.backgroundColor = '#3c575a';
                cas.classList.add('animacionEmpate');
            });
            //return false;
        }
        return true;
    }

    reiniciarTablero(){
        this._tablero = ['', '', '', '', '', '', '', '', ''];
    }


}