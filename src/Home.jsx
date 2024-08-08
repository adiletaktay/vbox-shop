import { ItemBlock } from "./ItemBlock"
import bonaqua from "/img/drinks/bonaqua.webp"
import cola from "/img/drinks/cola.webp"
import sprite from "/img/drinks/sprite.webp"
import kinder from "/img/snacks/kinder.jpg"
import roshen from "/img/snacks/roshen.jpg"
import snickers from "/img/snacks/snickers.webp"

export const Home = () => {
  const items = [
    {
      id: 0,
      imgurl: cola,
      title: "Coca-Cola 0.5л",
      subtitle: "Газированный напиток",
      price: 600,
      category: "drink",
    },
    {
      id: 1,
      imgurl: sprite,
      title: "Sprite 0.5л",
      subtitle: "Газированный напиток",
      price: 600,
      category: "drink",
    },
    {
      id: 2,
      imgurl: bonaqua,
      title: "Bonaqua 0.5л",
      subtitle: "Вода",
      price: 500,
      category: "drink",
    },
    {
      id: 4,
      imgurl: snickers,
      title: "Snickers",
      subtitle: "Шоколадный батончик",
      price: 550,
      category: "snack",
    },
    {
      id: 5,
      imgurl: kinder,
      title: "Kinder Bueno",
      subtitle: "Вафли",
      price: 450,
      category: "snack",
    },
    {
      id: 6,
      imgurl: roshen,
      title: "Roshen",
      subtitle: "Шоколад пористый",
      price: 500,
      category: "snack",
    },
  ]

  const drinks = items.filter(item => item.category == "drink")
  const snack = items.filter(item => item.category == "snack")

  return (
    <>
      <h2>Напитки</h2>
      <div className="drinks">
        {drinks.map(obj => (
          <ItemBlock {...obj} key={obj.id} />
        ))}
      </div>
      <h2>Снеки</h2>
      <div className="snacks">
        {snack.map(obj => (
          <ItemBlock {...obj} key={obj.id} />
        ))}
      </div>
    </>
  )
}
