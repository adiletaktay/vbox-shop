import { Link } from "react-router-dom"

import cartEmpty from "/icons/cartEmpty.svg"

export const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не выбрали ещё товар.
        <br />
        Для того, чтобы выбрать товар, перейди на главную страницу.
      </p>
      <img src={cartEmpty} alt="Empty cart" loading="lazy" />
      <Link to="/vbox-shop" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  )
}
