import { connect } from 'react-redux';
import MainApp from './MainApp';

function mapDispatchToProps(dispatch) {

    return {
        onTodoClick: (index) => {
            dispatch({ type: 'TOGGLE_TODO', index});
        },
        onAddTodo: (label) => {
            dispatch({ type: 'ADD_TODO', label});
        },



        // Filters
        selectFilter: (filter) => {
            dispatch({type: 'FILTER_UPDATE', filter})
        },

        // Unused
        processFilter: (element) => {

            if(this.state.filters.currentFilter === "none") {
                return true;
            } else if(element.tribu.toLowerCase() === this.state.filters.currentFilter.toLowerCase()) {
                return true;
            }

            return false;
        }
    }
}

function mapStateToProps(state) {

    return {
        protagonists: state.protagonists,
        filters: state.filters
    }
}

const MainAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainApp);

export default MainAppContainer;
