import { DrinkBlock } from './DrinkBlock'
import { SnacksBlock } from './SnacksBlock'

import drink from './data/drinks.json'
import snack from './data/snacks.json'

export const Home = () => {

    return (
      <>
      <h2>Напитки</h2>
      <div className='drinks'>
        {drink.map((obj) => (
          <DrinkBlock {...obj} key={obj.id} />
        ))}
      </div>
      <h2>Снеки</h2>
      <div className='snacks'>
        {snack.map((obj) => (
          <SnacksBlock {...obj} key={obj.id} />
        ))}
      </div>
      </>
    )
}