import React, { useEffect, useState, useContext } from 'react';
import { useCollectData } from '../Hoock/useCollectdata';
import { ordersContex } from '../contex/orders'; // Asumiendo que OrdersProvider expone un contexto llamado OrdersContext

function Carta() {
  const [carta, setCarta] = useState([]);
  useCollectData(setCarta);

  const { addOrders } = useContext(ordersContex); // Aquí debes usar el contexto correcto

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando cambia 'carta'
  }, [carta]);

  return (
    <>
      <h3>Carta</h3>
      {carta.map((menu) => (
        <div key={menu.id}>
          <h4>{menu.title}</h4>
          <p>{menu.descripcion}</p>
          <span>{menu.descripcion}</span>
          <img className='imagen' src={menu.url} alt={menu.title} />
          <button onClick={() => addOrders(menu)}>Agregar al pedido</button>
        </div>
      ))}
    </>
  );
}

export default Carta;