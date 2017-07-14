import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import {Engine} from './Engine';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Engine />, document.getElementById('root'));
registerServiceWorker();
