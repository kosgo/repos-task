import { FunctionComponent } from 'react';
import styles from './Loader.module.scss';

const Loader: FunctionComponent = () => (
    <div className={styles.container}>
        <div className={styles.loader}>Loading...</div>
    </div>
);

export default Loader;