const initialStateFilter = {
    currentFilter: 'none',
    elements: [
        {
            slug:"none",
            title: "Tous"
        }, 
        {
            slug:"goron",
            title: "Goron"
        }, 
        {
            slug:"zora",
            title: "Zora"
        }
    ]
};

function filter(state = initialStateFilter, action) {

    const defaultAction = {type: ''};

    action = action || defaultAction;

    switch (action.type) {

        case 'FILTER_UPDATE':
            const newState = {...state};
            newState.currentFilter = action.filter;

            return newState;

        default:
            return state;
    }
}

export default filter;
