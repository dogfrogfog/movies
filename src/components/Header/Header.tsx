import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import { moviesActions } from '../../redux/movies/moviesSlice';

import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const debounce = setTimeout(() => {
      dispatch(moviesActions.setSearchTitle(event.target.value.trim()));
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Catalog</h1>
      <input className={styles.input} type="text" onChange={onChange} placeholder="What are you looking for?" />
    </div>
  );
};
