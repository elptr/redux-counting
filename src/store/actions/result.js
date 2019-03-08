import * as actionTypes from "./actionTypes";





export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result:res
    };
}
export const storeResult = (res) => {
    return dispatch => { // simulating asynchronous reaching server, won't work without thunk
        setTimeout(() => { // simulating asynchronous reaching server, won't work without thunk
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
