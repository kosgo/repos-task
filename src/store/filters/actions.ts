import { PaginateRepositories, SearchRepositories } from './types';
import { PAGINATE_REPOSITORIES, SEARCH_REPOSITORIES } from './constants';

export const searchRepository = (payload: { search: string; total: number }): SearchRepositories => ({
    type: SEARCH_REPOSITORIES,
    payload,
})

export const paginateRepositories = (payload: number): PaginateRepositories => ({
    type: PAGINATE_REPOSITORIES,
    payload,
});