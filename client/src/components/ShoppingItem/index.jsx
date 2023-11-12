import React from 'react'
import axios from 'axios'
import { serverUrl } from '../../utils/utils'
import { useAppContext } from '../../AppContext'
import toast from 'react-hot-toast'
import store from '../../store'
import { setShoppingList } from '../../store/shopping'

const ShoppingItem = ({ shoppingItem }) => {

    const { getShoppingList } = useAppContext();

    const handleUpdate = async () => {
        const result = await axios.put(`${serverUrl}/updateShoppingItem/${shoppingItem.id}`);
        if (result.data.success) {
            await getShoppingList()
            await toast.success("Ürün Başarıyla Güncellendi");
        } else {
            toast.error("Ürün Güncellenirken Bir Hata Oluştu");
        }
    }

    const handleDelete = async () => {
        const result = await axios.delete(`${serverUrl}/deleteShoppingItem/${shoppingItem.id}`);
        if (result.data.success) {
            await getShoppingList();
            await toast.success("Ürün Listeden Başarıyla Silindi");
        } else {
            toast.error("Ürün Listeden Silinirken Bir Hata Oluştu");
        }
    }

    return (
        <div className='w-full h-auto flex flex-row space-x-12 border-b px-2 py-1 border-black items-center'>
            <p onClick={handleUpdate} className={`flex-1 text-black cursor-pointer ${shoppingItem.isCompleted && "line-through text-gray-400"}`}>
                {shoppingItem.description}
            </p>

            <button onClick={handleDelete} className='bg-red-500 py-2 px-4 hover:bg-red-600 text-white rounded-lg'>
                X
            </button>
        </div>
    )
}

export default ShoppingItem