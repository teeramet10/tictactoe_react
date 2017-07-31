import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Container/App'
import './Component/index.css'

import registerServiceWorker from './registerServiceWorker';

const Root = () =>
    <BrowserRouter>

        <App />
    </BrowserRouter>


ReactDOM.render(<Root />, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./Container/App', () => {
        const RootApp = require('./Container/App').default

        ReactDOM.render(
            <BrowserRouter>
                <RootApp/>
            </BrowserRouter>,
            document.getElementById('root')
        )
    })
}

registerServiceWorker();
