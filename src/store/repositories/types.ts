import { Repository } from '../../models/repository';
import {
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_ERROR,
    FETCH_REPOSITORIES_SUCCESS,
    CHANGE_VISIBLE_DATA,
} from './constants';

export interface RepositoriesState {
    data: Repository[];
    visibleData: Repository[];
    loading: boolean;
    error: null | Error;
}

export interface FetchRepositories {
    type: typeof FETCH_REPOSITORIES;
}

export interface FetchRepositoriesSuccess {
    type: typeof FETCH_REPOSITORIES_SUCCESS;
    payload: Repository[];
}

export interface FetchRepositoriesError {
    type: typeof FETCH_REPOSITORIES_ERROR;
    error: Error;
}

export interface ChangeVisibleData {
    type: typeof CHANGE_VISIBLE_DATA;
    payload: Repository[];
}

export type RepositoriesActionTypes = FetchRepositories | FetchRepositoriesSuccess | FetchRepositoriesError | ChangeVisibleData;
