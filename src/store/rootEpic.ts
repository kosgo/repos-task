import { combineEpics } from 'redux-observable';
import { fetchRepositoriesEpic } from './repositories/actions';

export const rootEpic = combineEpics(
    fetchRepositoriesEpic,
);
