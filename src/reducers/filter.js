const initialStateFilter = "none";

function filter(state = initialStateFilter, action) {

    switch (action.type) {

        case 'FILTER_UPDATE':
            return action.filter;

        default:
            return state;
    }
}

export default filter;
