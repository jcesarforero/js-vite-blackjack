
/**
 * Esta función me permite tomar una carta de un Deck
 * @param {Array<String>} deck es un arreglo de string
 * @returns {<String>}  Retorna una carta del Deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new error( 'No hay cartas en el deck' );
    }
    const carta = deck.pop();
    return carta;
}