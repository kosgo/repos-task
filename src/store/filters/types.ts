import { PAGINATE_REPOSITORIES, SEARCH_REPOSITORIES } from './constants';

export interface FiltersState {
    search: string;
    total: number;
    perPage: number;
    currentPage: number;
}

export interface SearchRepositories {
    type: typeof SEARCH_REPOSITORIES;
    payload: { search: string; total: number };
}

export interface PaginateRepositories {
    type: typeof PAGINATE_REPOSITORIES;
    payload: number;
}

export type FilterActionTypes = SearchRepositories | PaginateRepositories;