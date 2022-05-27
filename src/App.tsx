// можно сделать индекс файлы в папках чтобы не дублировать в пути название
import { Header } from './components/Header/Header';
import { Movies } from './components/Movies/Movies';

import styles from './App.module.scss';

// можно убрать фигурные скобки и return export const App = () => (<YOUR_CODE>);
export const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Movies />
    </div>
  );
};