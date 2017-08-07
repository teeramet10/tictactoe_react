import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './Container/App'
import './Component/index.css'
import { combineReducers, createStore } from "redux"
import { Provider } from 'react-redux'
import rootReducer from './reducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,
    window.devToolsExtension && window.devToolsExtension())

const Root = () =>
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

ReactDOM.render(<Root />, document.getElementById('root'));

// if (module.hot) {
//     module.hot.accept('./Container/App', () => {
//         const RootApp = require('./Container/App').default

//         ReactDOM.render(
//             <Provider store={store}>
//             <BrowserRouter>
//                 <RootApp/>
//             </BrowserRouter>
//             </Provider>
//             ,
//             document.getElementById('root')
//         )
//     })
// }

registerServiceWorker();
