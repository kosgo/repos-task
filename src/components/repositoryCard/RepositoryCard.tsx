import { Repository } from '../../models/repository';
import { FunctionComponent } from 'react';
import styles from './RepositoryCard.module.scss';

interface Props {
    repository: Repository;
}

const RepositoryCard: FunctionComponent<Props> = ({ repository }) => (
    <article className={styles.root}>
        <h3 className={styles.title}>{repository.full_name}</h3>
        <div className={styles.ownerContainer}>
            <img className={styles.ownerImg} src={repository.owner.avatar_url} alt={repository.owner.login} />
            <a href={repository.owner.html_url} target="_blank" rel="noreferrer" className={styles.ownerName}>
                {repository.owner.login}
            </a>
        </div>
        <div className={styles.description}>
            {repository.description}
        </div>
        <div className={styles.actions}>
            <a href={repository.html_url} className={styles.link} target="_blank" rel="noreferrer">Visit</a>
        </div>
    </article>
);

export default RepositoryCard;
