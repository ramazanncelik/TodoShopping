import React from 'react'
import ShoppingForm from './components/ShoppingForm'
import { useAppContext } from './AppContext'
import ShoppingItem from './components/ShoppingItem';

const App = () => {

  const { shoppingList } = useAppContext();

  return (
    <div className={`mt-2 flex-1 overflow-auto bg-white`}>
      <div className={`flex flex-col space-y-2 m-auto max-w-screen-xl h-full px-4 py-2`}>
        <ShoppingForm />

        <p className='w-full text-center text-xl'>
          Alışveriş Listem
        </p>

        {shoppingList.length !== 0 ?
          shoppingList.map(shoppingItem => {
            return (
              <ShoppingItem key={shoppingItem.id} shoppingItem={shoppingItem} />
            )
          }) :
          <p className='w-full p-3 rounded-lg bg-blue-100 text-blue-700'>
            Alışveriş Listenizde Henüz Hiçbir Ürün Bulunmamaktadır.
          </p>}
      </div>
    </div>
  )
}

export default App