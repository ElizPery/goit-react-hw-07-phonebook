import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChangeData = ({ currentTarget }) => {
      const { value } = currentTarget;
      dispatch(setFilter(value))
    };

    return (<label className={css.contactFilterData}>
        Find contacts by name
        <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChangeData}  
            className={css.contactFilterItem}
            required
        />
    </label>)
}

export default Filter;
