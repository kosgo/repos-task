import { FilterActionTypes, FiltersState } from './types';
import { PAGINATE_REPOSITORIES, SEARCH_REPOSITORIES } from './constants';

const initialState: FiltersState = {
    search: '',
    perPage: 10,
    total: 100,
    currentPage: 1,
};

const reducer = (state = initialState, action: FilterActionTypes): FiltersState => {
    switch (action.type) {
        case SEARCH_REPOSITORIES:
            return { ...state, search: action.payload.search, total: action.payload.total, currentPage: 1 };
        case PAGINATE_REPOSITORIES:
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
}

export default reducer;