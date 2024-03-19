import _ from 'underscore';




/** ESTA FUNCION CREA UN NUEVO DECK
 *          
 * @param {Array<String>} tiposDeCarta       ejemplo: ['C','D','H','S'];
 * @param {Array<String>} TiposEspeciales    ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>}; RETORNA UN NUEVO DECK DE CARTAS
 */
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length===0) 
    throw new Error ('tiposDeCarta es obligatorio que sea un arreglo de string');
    if(!TiposEspeciales || TiposEspeciales.length===0) 
    throw new Error ('tiposEspeciales es obligatorio que sea un arreglo de string');
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
