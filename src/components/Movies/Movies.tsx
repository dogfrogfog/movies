import { useSelector } from 'react-redux';

import { Loader } from '../common/Loader/Loader';
import { Pagination } from '../common/Pagination/Pagination';
import { selectSearchTitle } from '../../redux/movies/moviesSelectors';
import { selectCurrentPage } from '../../redux/pagination/paginationSelectors';
import { useSearchMovieQuery } from '../../api/moviesApi';
import { MovieCard } from './MovieCard/MovieCard';

import styles from './Movies.module.scss';

export const Movies = () => {
  const searchTitle = useSelector(selectSearchTitle);
  const currentPage = useSelector(selectCurrentPage);

  const { data, isFetching } = useSearchMovieQuery({ title: searchTitle, pageNumber: currentPage });

  if (isFetching) {
    return <Loader />;
  }

  if (data?.Error) {
    return (
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100% - 80px)' }}>
        {data?.Error}
      </h2>
    );
  }

  return (
    <div>
      <div>
        {searchTitle && data?.totalResults && (
          <span>
            You searched for {searchTitle}, {data?.totalResults} results found
          </span>
        )}
      </div>
      <div className={styles.container}>
        {data?.Search?.map(({ imdbID, Title, Year, Poster }) => (
          <MovieCard key={imdbID} title={Title} year={Year} poster={Poster} imdbID={imdbID} />
        ))}
      </div>
      <Pagination items={Number(data?.totalResults)} perPage={9} />
    </div>
  );
};
