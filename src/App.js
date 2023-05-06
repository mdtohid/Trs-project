import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import OrderItem from './Components/OrderItem/OrderItem';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/items/:id' element={<OrderItem></OrderItem>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
