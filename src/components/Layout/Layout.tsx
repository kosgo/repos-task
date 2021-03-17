import { FunctionComponent } from 'react';
import styles from './Layout.module.scss';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Layout: FunctionComponent<Props> = ({ children }) => (
    <div className={styles.root}>{children}</div>
);

export default Layout;
