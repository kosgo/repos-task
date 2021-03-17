import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './Filters.module.scss';
import { paginateRepositories, searchRepository } from '../../store/filters/actions';
import { RootState } from '../../store/rootReducer';
import { changeVisibleData } from '../../store/repositories/actions';

const Filters = () => {
    const dispatch = useDispatch();
    const { search, perPage, total, currentPage, repositories } = useSelector(({ filters, repositories }: RootState) => ({
        search: filters.search,
        currentPage: filters.currentPage,
        perPage: filters.perPage,
        total: filters.total,
        repositories: repositories.data,
    }));

    const handleSearchChange = useCallback((event) => {
        const search = event.target.value;
        const newData = repositories.filter(repo => repo.full_name.includes(search));

        dispatch(searchRepository({ search, total: newData.length }));
        dispatch(changeVisibleData(newData));
    }, [dispatch, repositories]);

    const handlePaginationClick = useCallback((page) => {
        dispatch(paginateRepositories(page));
    }, [dispatch]);


    const pages = useMemo(() => {
        const value = [];
        for (let i = 1; i <= Math.ceil(total / perPage); i++) {
            value.push(i);
        }

        return value;
    }, [total, perPage]);

    return (
        <div className={styles.root}>
            <input className={styles.search} type="text" value={search} onChange={handleSearchChange}
                   placeholder="Start typing"/>
            <ul className={styles.pagination}>
                {pages.map(num => (
                    <li
                        className={cn(styles.paginationItem, currentPage === num && styles.paginationItemActive)}
                        key={num}
                        onClick={() => handlePaginationClick(num)}
                    >
                        {num}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Filters;