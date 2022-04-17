import { Header } from './components/Header/Header';
import { Movies } from './components/Movies/Movies';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Movies />
    </div>
  );
};
