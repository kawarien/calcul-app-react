// source de vérité
const stateInit = {
    numbers : [1, 2, 8, 7 ],
    number1 : '', // le contrôle de l'élément ajouter dans le reducer
    number2 : '', // le contrôle de l'élément ajouter dans le reducer
    result : '',
    message: '',
}

// algo
const reducer = (state = stateInit, action = {} ) =>{

    switch(action.type){

        case "SHUFFLE":
            const numbers = [ ...state.numbers ] ;
            // astuce pour mélanger des nombres dans un tableau
            // cela joue sur l'algorithme de tri de la fonction sort
            // un coup positif un coup négatif
            numbers.sort(() => 0.5 - Math.random() );

            return {
                ...state,
                numbers : numbers
            }
        
        case "SET_NUMBER":

            const { value, name } = action;

            if (value.trim() === '' || isNaN(value)) {

                return {
                    ...state,
                    message: `Pb de saisi ${value} : champ vide ou ce n'est pas un nombre`,
                    [name] : ''
                    
                }
            }

            return {
                ...state,
                [name] : value,
                message: '', type: ""
            }

        case "ADD":
            const { number1, number2 } = state;

            return {
                ...state,
                number1: '', number2: '',
                result : parseFloat(number1) + parseFloat(number2)
            }

        case "RESET":

            return {
                ...state,
                ...stateInit
            }

        default: 
            return state;
    }
}

export default reducer;