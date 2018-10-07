import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import createReduxStore from './store';

const store = createReduxStore();

console.log('STATE after STORE creation ', store.getState());

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
