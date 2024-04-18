import React from "react";

export const SnacksBlock = ({imgurl, title, subtitle, price}) => {
    const [snackCount, setSnackCount] = React.useState(0);

    const onClickPlus = () => {
        setSnackCount(snackCount + 1);
    };
    
    const onClickMinus = () => {
        setSnackCount(snackCount - 1);
    };

    return (
        <div className="snacks-block">
            <img className="snacks-block__image" src={imgurl} alt="Drinks" />
            <div className="snacks-block__title">{title}</div>
            <div className="snacks-block__subtitle">{subtitle}</div>
            <div className="snacks-block__price">цена {price} ₸</div>
            <div className="snacks-block__bottom">
                <button disabled={snackCount === 0} onClick={onClickMinus} className="button button--delete">
                    <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                        fill="white"
                        ></path>
                    </svg>
                </button>
                <i>{snackCount}</i>
                <button onClick={onClickPlus} className="button button--add">
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                    />
                </svg>
                </button>
            </div>
        </div>
    )
}