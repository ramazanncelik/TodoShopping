import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { serverUrl } from '../../utils/utils'
import { useAppContext } from '../../AppContext'
import toast from 'react-hot-toast'

const ShoppingForm = () => {

    const { getShoppingList } = useAppContext();

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: {
            description: ""
        },
        onSubmit: async () => {
            console.log(values)
            axios.post(`${serverUrl}/addShoppingItem`, { description: values.description }).then(response => {
                if (response.data.success) {
                    getShoppingList();
                    toast.success("Alışveriş Listesine Ekleme Başarıyla Yapıldı.");
                    handleReset();
                } else {
                    toast.error("Alışveriş Listesine Ekleme Yapılırken Bir Hata ile Karşılaşıldı. Lütfen Tekrar Deneyiniz.")
                }
            });

        },
    })

    return (
        <form className='w-full flex flex-row space-x-3' onSubmit={handleSubmit}>
            <input
                className='flex-1 p-2 rounded-lg border select-none'
                name='description'
                required
                value={values.description}
                onChange={handleChange}
                placeholder='Alışveriş Listesine Ekle'
            />

            <button type='submit' className='py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600 select-none'>
                Ekle
            </button>
        </form>
    )
}

export default ShoppingForm;