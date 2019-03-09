import * as actionTypes from "./actionTypes";




export const saveResult = (res) => {
    // const updatedResult = res * 2; //* 2 add logic here or in reducers/result
    // it can be done in both way, more logical to put logic in reducer
    return {
        type: actionTypes.STORE_RESULT,
        result:res
    };
}
export const storeResult = (res) => {
    return (dispatch, getState) => { // simulating asynchronous reaching server, won't work without thunk
        setTimeout(() => { // simulating asynchronous reaching server, won't work without thunk

            console.log('prevState', getState().ctr.counter); //getState var available because of thunk
            dispatch(saveResult(res)) //create const saveResult to avoid infinitive loop
        }, 2000)
    }
};

export const deleteResult = (resElId) => {

    return {
        type: actionTypes.DELETE_RESULT,
        resultElId:resElId
    };
};
