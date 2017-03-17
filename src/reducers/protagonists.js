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

            return state.concat([{
                name: action.element.name,
                tribu: action.element.tribu
            }]);

        default:
            return state;
    }
}

export default protagonists;
