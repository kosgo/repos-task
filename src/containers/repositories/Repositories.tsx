import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepositories } from '../../store/repositories/actions';
import { RootState } from '../../store/rootReducer';
import Loader from '../../components/loader/Loader';
import RepositoriesList from '../../components/repositoriesList/RepositoriesList';

const Repositories = () => {
    const dispatch = useDispatch();

    const { repositories, loading } = useSelector(({ repositories, filters }: RootState) => {
        const lastIndex = filters.currentPage * filters.perPage;
        const firstIndex = lastIndex - filters.perPage;

        return {
            repositories: repositories.visibleData.slice(firstIndex, lastIndex),
            loading: repositories.loading,
        };
    });

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return loading ? <Loader /> : <RepositoriesList repositories={repositories} />;
};

export default Repositories;