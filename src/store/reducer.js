import * as actionTypes from './actions';

const initialState = {
    counter:0,
    results:[]
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
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value:state.counter}),
                //not push, because push change original arr

            }
        case 'DELETE_RESULT':
            // //First way of copy array immutable
            // const id=2; //index  //state.result.splice(id, 1); //mutates original array
            // const newArray = [...state.result]
            // //create copy of array, if elements of arrs
            // //are objects, that need to copy them too, otherwise they are the same objects,
            // //it is enough for removing element, because you are not changing original array
            // newArray.splice(id, 1);

            // //Second method is use filter()
            // const id=2;
            // const updatedArray = state.results.filter(result => true);
            // //create of copy of array - long  for [...state.results,
            // // but not always want to return true, only for elements that should be in new array
            // //if we want to delete it we should return true for all elements that does not have certain index or id
            // const updatedArray = state.results.filter((result, index) => index !== id);
            // // we have id in {id: new Date(), value:state.counter}, not index, so we don't need index,
            // // only check for id, that comes from payload
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updatedArray

            }

    }

    return state
}




export default reducer;