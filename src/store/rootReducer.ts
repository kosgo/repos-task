import { combineReducers } from 'redux';
import repositoriesReducer from './repositories/reducer';
import filterReducer from './filters/reducer';

export const rootReducer = combineReducers({
    repositories: repositoriesReducer,
    filters: filterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
