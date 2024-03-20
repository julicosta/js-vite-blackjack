
import { pedirCarta, valorCarta, crearCartaHTML } from "./";

// turno de la computadora
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement>} puntosHTML elemento HTML para mostrar los  puntos
 * @param {divCartasComputadora>} divCartasComputadora elemento HTML para mostrar los  puntos
 * @param {Array<String>} deck  
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
        if(!deck) throw new Error('El deck es necesario');
        if(!puntosHTML) throw new Error('Argumento HTML es necesario');

        

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    const mostrarResultado = (mensaje) => {
        setTimeout(() => {
            alert(mensaje);
        }, 500);
    };
    
    if (puntosComputadora === puntosMinimos) {
        mostrarResultado('Nadie gana :(');
    } else if (puntosMinimos > 21) {
        mostrarResultado('Computadora gana');
    } else if (puntosComputadora > 21) {
        mostrarResultado('Jugador Gana');
    } else {
        mostrarResultado('Computadora Gana');
    }
}    