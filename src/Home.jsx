import { ItemBlock } from './ItemBlock'

import items from './data/items.json'

export const Home = () => {

    const drinks = items.filter(item => item.category == "drink")
    const snack = items.filter(item => item.category == "snack")

    return (
      <>
      <h2>Напитки</h2>
      <div className='drinks'>
        {drinks.map((obj) => (
          <ItemBlock {...obj} key={obj.id} />
        ))}
      </div>
      <h2>Снеки</h2>
      <div className='snacks'>
        {snack.map((obj) => (
          <ItemBlock {...obj} key={obj.id} />
        ))}
      </div>
      </>
    )
}