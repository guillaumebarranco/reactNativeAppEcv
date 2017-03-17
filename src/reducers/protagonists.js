const initialState = [
    {
        name: 'Daruma',
        tribu: 'Goron'
    }, {
        name:'Jabu-Jabu',
        tribu: 'Zora'
    }, {
        name: 'Mido',
        tribu: "Kokiri"
    }
];

function protagonists(state = initialState, action) {

    switch (action.type) {

        case 'ADD_PROTAGONIST':
            return state.concat([{ name: action.name, tribu: action.tribu }]);

        case 'TOGGLE_PROTAGONIST':
            const newState = state.concat();
            newState[action.index].complete = !newState[action.index].complete;
            return newState;

        default:
            return state;
    }
}

export default protagonists;
