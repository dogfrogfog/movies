import noPhoto from '../../../images/noPhoto.jpg';

import styles from './MovieCard.module.scss';

type Props = {
  title: string;
  poster: string;
  year: string;
  imdbID: string;
};

export const MovieCard = ({ title, poster, year, imdbID }: Props) => {
  const handleClick = () => {
    window.open(`https://www.imdb.com/title/${imdbID}`);
  };
  const movieImage = poster !== 'N/A' ? poster : noPhoto;

  return (
    <div onClick={handleClick} className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={movieImage} alt={title} />
      </div>
      <span className={styles.title}>{title}</span>
      <span>{year}</span>
    </div>
  );
};
