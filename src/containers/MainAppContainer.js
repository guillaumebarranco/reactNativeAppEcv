import { connect } from 'react-redux';
import MainApp from './MainApp';

function mapDispatchToProps(dispatch) {

    return {
        addElement: (element) => {
            dispatch({ type: 'ADD_PROTAGONIST', element});
        },


        // Filters
        selectFilter: (filter) => {
            dispatch({type: 'FILTER_UPDATE', filter})
        },

        // Unused for now
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
