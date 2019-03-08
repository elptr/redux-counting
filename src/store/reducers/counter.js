import * as actionTypes from '../actions/actions';

const initialState = {
    counter:0,

}


const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state); // not deep copy, rusults Arr the same Arr
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state, //not deep copy too
                counter:state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter:state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter:state.counter - action.val
            }
    }

    return state
}




export default reducer;