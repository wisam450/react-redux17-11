import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import couterReducer from './store/reducer/couterReducer';
import { Provider  } from 'react-redux';
import { createStore  } from 'redux';

const store = createStore(couterReducer);

ReactDOM.render( <Provider store={ store }> <App /> </Provider>, document.getElementById('root'));


