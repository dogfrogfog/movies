import { useDispatch, useSelector } from 'react-redux';

import {
  selectCurrentPage,
  selectMaxPageNumberLimit,
  selectMinPageNumberLimit,
} from '../../../redux/pagination/paginationSelectors';
import { paginationActions } from '../../../redux/pagination/paginationSlice';

import styles from './Pagination.module.scss';

type Props = {
  items: number;
  perPage: number;
};

export const Pagination = ({ items, perPage }: Props) => {
  const dispatch = useDispatch();

  const maxPageNumberLimit = useSelector(selectMaxPageNumberLimit);
  const currentPage = useSelector(selectCurrentPage);
  const minPageNumberLimit = useSelector(selectMinPageNumberLimit);

  const pageCount = Math.ceil(items / perPage);
  const pageNumberLimit = 5;
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  const setCurrentPage = (currentPage: number) => {
    dispatch(paginationActions.setCurrentPage(currentPage));
  };

  const setMaxPageNumberLimit = (maxPageNumberLimit: number) => {
    dispatch(paginationActions.setMaxPageNumberLimit(maxPageNumberLimit));
  };

  const setMinPageNumberLimit = (minPageNumberLimit: number) => {
    dispatch(paginationActions.setMinPageNumberLimit(minPageNumberLimit));
  };

  // по сути 5 почти одинаковых функций, можно сделать 1-2 и лимиты по страницам закинуть в какой-то конфиг
  // все это может работать под капотом в редьюсере и не обязательно выноситть это на уровент компонента
  // тогда возможно даже экшены setMinPageNumberLimit и setMaxPageNumberLimit не нужны будут
  const onPrevButtonClick = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - 5);
      setMinPageNumberLimit(minPageNumberLimit - 5);
    }
  };

  // handleNextButtonClick ? ну это вкусовщина
  const onNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + 5);
      setMinPageNumberLimit(minPageNumberLimit + 5);
    }
  };

  const onNextDatsClick = () => {
    setCurrentPage(currentPage + pageNumberLimit);
    if (currentPage <= maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const onPrevDatsClick = () => {
    setCurrentPage(currentPage - pageNumberLimit);
    if (currentPage >= minPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const onLastPageClick = () => {
    setCurrentPage(pageCount);
    setMinPageNumberLimit(pageCount - pageNumberLimit);
    setMaxPageNumberLimit(pageCount);
  };

  return (
    <div className={styles.container}>
      <span className={styles.allItems}>
        {/* что-то магическое, понятные простые условия вынести в константу, со значениями так же */}
        {currentPage === 1 ? 1 : (currentPage - 1) * perPage + 1}-
        {currentPage * perPage > items ? items : currentPage * perPage} of {items} items
      </span>

      <button disabled={currentPage === 1} className={styles.prevButton} onClick={onPrevButtonClick} />

      {currentPage > pageNumberLimit && (
        <span onClick={onPrevDatsClick} className={styles.page}>
          ...
        </span>
      )}

      {pages.slice(minPageNumberLimit, maxPageNumberLimit).map((page) => {
        return (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? styles.currentPage : styles.page}
          >
            {page}
          </span>
        );
      })}
      {currentPage <= pageCount - pageNumberLimit && (
        <span onClick={onNextDatsClick} className={styles.page}>
          ...
        </span>
      )}

      {currentPage <= pageCount - pageNumberLimit && (
        <span onClick={onLastPageClick} className={currentPage === pageCount ? styles.currentPage : styles.page}>
          {pageCount}
        </span>
      )}
      <button disabled={currentPage === pageCount} className={styles.nextButton} onClick={onNextButtonClick} />
    </div>
  );
};
