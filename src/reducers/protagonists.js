const initialState = [];

function protagonists(state = initialState, action) {

    switch (action.type) {

        case 'ADD_PROTAGONIST':

            return state.concat([{
                name: action.element.name,
                tribu: action.element.tribu
            }]);

        case 'FETCH_PROTAGONISTS_SUCCESS':
            return state.concat(action.protagonists);

        default:
            return state;
    }
}

export default protagonists;
