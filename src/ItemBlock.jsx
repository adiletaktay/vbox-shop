import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem } from './redux/CartSlice';

export const ItemBlock = ({id, imgurl, title, subtitle, price}) => {
    const dispatch = useDispatch();
    
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.id === id));

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickPlus = () => {
        const item = {
          id,
          title, 
          subtitle, 
          price
        }
        dispatch(addItem(item));
    };
    
    const onClickMinus = () => {
      const item = {
        id,
        title, 
        subtitle, 
        price
      }
      dispatch(minusItem(item));
    };

    return (
        <div className="item-block">
            <img className="item-block__image" src={imgurl} alt="item" />
            <div className="item-block__info">
              <div className="item-block__title">{title}</div>
              <div className="item-block__subtitle">{subtitle}</div>
            </div>
            <div className="item-block__number">
              <div className="item-block__price">цена {price} ₸</div>
              <div className="item-block__bottom">
            </div>
                <div className="count__control">
                <button disabled={addedCount === 0} onClick={onClickMinus} className="button button--delete">
                <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                        fill="black"
                        ></path>
                    </svg>
                </button>
                <b>{addedCount}</b>
                <button onClick={onClickPlus} className="button button--add">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                    fill="black"
                  ></path>
                  <path
                    d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                    fill="black"
                  ></path>
                </svg>
                </button>
                </div>
            </div>
        </div>
    )
}