import React, { createContext, useContext, useState } from 'react';

export const ordersContex = createContext()
const {Provider} = ordersContex


export const OrdersProvider =({children})=>{
    const [listOrders, setListOrders] = useState([])


    const addOrders = (menu) => {
        console.log(`click`);
        console.log(menu);
    const listaOrders = [...listOrders, menu];
    setListOrders(listaOrders);
  };
    return (
        <Provider value={{addOrders,listOrders}}>
            {children}
        </Provider>
    )
}