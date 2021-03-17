import { RepositoriesActionTypes, RepositoriesState } from './types';
import {
    CHANGE_VISIBLE_DATA,
    FETCH_REPOSITORIES,
    FETCH_REPOSITORIES_ERROR,
    FETCH_REPOSITORIES_SUCCESS
} from './constants';

const initialState: RepositoriesState = {
    data: [],
    visibleData: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action: RepositoriesActionTypes): RepositoriesState => {
    switch (action.type) {
        case FETCH_REPOSITORIES:
            return { ...state, loading: true };
        case FETCH_REPOSITORIES_SUCCESS:
            return { ...state, data: action.payload, visibleData: action.payload, loading: false, error: null };
        case FETCH_REPOSITORIES_ERROR:
            return { ...state, loading: false, error: action.error };
        case CHANGE_VISIBLE_DATA:
            return { ...state, visibleData: action.payload };
        default:
            return state;
    }
};

export default reducer;