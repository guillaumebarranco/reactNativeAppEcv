import { connect } from 'react-redux';
import MainApp from './MainApp';
import fetchProtagonists from './../components/fetchProtagonists';

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
        },

        fetchComplete : (protagonists) => {
            dispatch({type: 'FETCH_PROTAGONISTS_SUCCESS', protagonists})
        },
        fetchError : (error) => {
            dispatch({type: 'FETCH_PROTAGONISTS_ERROR', error})
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
)(fetchProtagonists(MainApp));

export default MainAppContainer;
