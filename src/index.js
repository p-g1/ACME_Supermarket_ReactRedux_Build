import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import basketReducer from './reducers/basketReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
    basketReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                 document.getElementById('root'));
