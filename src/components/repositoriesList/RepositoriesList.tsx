import { FunctionComponent } from 'react';
import { Repository } from '../../models/repository';
import RepositoryCard from '../repositoryCard/RepositoryCard';
import styles from './RepositoriesList.module.scss';

interface Props {
    repositories: Repository[];
}

const RepositoriesList: FunctionComponent<Props> = ({ repositories }) => (
    <main className={styles.root}>
        {repositories.map(repository => <RepositoryCard key={repository.id} repository={repository} />)}
    </main>
);

export default RepositoriesList;