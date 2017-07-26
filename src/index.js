import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './Component/App'
import './Component/index.css'
// import {First,Game,FilterableProductTable,NotFound} from './Component'
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
    <BrowserRouter>
       <App/>
    </BrowserRouter>


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
