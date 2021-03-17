import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './rootReducer';
import { rootEpic } from './rootEpic';

const configureStore = () => {
    const composeEnhancer = composeWithDevTools({});
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(epicMiddleware)),
    );

    epicMiddleware.run(rootEpic);

    return store;
};

export default configureStore;
