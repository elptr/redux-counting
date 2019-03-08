import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//combineReducers takes js object
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
    }

)


const logger = store => {
    return next => {
        return action => {
            console.log("MiddleWare, dispation", action);
            const result = next(action);
            console.log('Middleware, next state', store.getState());
            return result;

        }
    }
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
