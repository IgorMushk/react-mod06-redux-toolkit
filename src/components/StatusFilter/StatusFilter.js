import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
// Импортируем объект значений фильтра
import { statusFilters } from 'redux/constants';
// Импортируем хук
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from 'redux/selectors';
// Импортируем генератор экшена
import { setStatusFilter } from 'redux/actions';

export const StatusFilter = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();

  // Получаем значение фильтра из состояния Redux
  //const filter = useSelector(state => state.filters.status);
  const filter = useSelector(getStatusFilter);

  // Вызываем генератор экшена и передаём значение фильтра
  // Отправляем результат - экшен изменения фильтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all} onClick={() => handleFilterChange(statusFilters.all)}>All</Button>
      <Button selected={filter === statusFilters.active} onClick={() => handleFilterChange(statusFilters.active)}>Active</Button>
      <Button selected={filter === statusFilters.completed} onClick={() => handleFilterChange(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
