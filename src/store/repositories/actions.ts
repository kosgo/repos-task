import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Repository } from '../../models/repository';
import {
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_ERROR,
    FETCH_REPOSITORIES_SUCCESS,
    CHANGE_VISIBLE_DATA
} from './constants';
import { ChangeVisibleData, FetchRepositories, FetchRepositoriesError, FetchRepositoriesSuccess } from './types';

const fetchRepositoriesSuccess = (payload: Repository[]): FetchRepositoriesSuccess => ({
    type: FETCH_REPOSITORIES_SUCCESS,
    payload,
});

const fetchRepositoriesError = (error: Error): FetchRepositoriesError => ({
    type: FETCH_REPOSITORIES_ERROR,
    error,
});

export const fetchRepositories = (): FetchRepositories => ({
    type: FETCH_REPOSITORIES,
});

export const changeVisibleData = (payload: Repository[]): ChangeVisibleData => ({
    type: CHANGE_VISIBLE_DATA,
    payload,
});

export const fetchRepositoriesEpic: Epic = (action$) => action$.pipe(
    ofType(FETCH_REPOSITORIES),
    mergeMap(() =>
        ajax('https://api.github.com/repositories')
            .pipe(
                map(({response}) => fetchRepositoriesSuccess(response)),
                catchError((error) => of(fetchRepositoriesError(error)))
            )
    )
);