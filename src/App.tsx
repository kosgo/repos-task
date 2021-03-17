import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Repositories from './containers/repositories/Repositories';
import Filters from './containers/filters/Filters';
import Layout from './components/Layout/Layout';

const store = configureStore();

const App: FunctionComponent = () => (
    <Provider store={store}>
        <Layout>
            <Filters />
            <Repositories />
        </Layout>
    </Provider>
);

export default App;
