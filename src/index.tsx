import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';

const root = document.querySelector('#root');

const Main = () => {
    return (
        <BrowserRouter>
            <App />
        </ BrowserRouter>
    );
}

ReactDOM.render(<Main />, root);