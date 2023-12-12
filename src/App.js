
import './App.css';
import SubirCarta from './pages/SubirCarta';

import Carta from './pages/Carta';
import Mosos from './pages/Mosos';
import { OrdersProvider } from './contex/orders';
function App() {
 
  return (
    <div className="App">
      <OrdersProvider>
        <SubirCarta ></SubirCarta>
        <Carta ></Carta>     
        <Mosos></Mosos>   
      </OrdersProvider>

    </div>
  );
}

export default App;
