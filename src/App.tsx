import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Root } from 'routes';

const App = () => (
    <Provider store={store()}>
        <Router>
            <Root />
        </Router>
    </Provider>
)

export default App;
