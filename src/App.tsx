import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainLayout } from 'hoc/MainLayout';

const App = () => {
    return (
        <Provider store={store()}>
            <Router>
                <MainLayout />
            </Router>
        </Provider>
    );
};

export default App;
