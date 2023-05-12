import { Route, Routes } from 'react-router';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Login from './Components/Login/Login';
import MyOrder from './Components/MyOrder/MyOrder';
import MyProfile from './Components/MyProfile/MyProfile';
import MyReview from './Components/MyReview/MyReview';
import OrderItem from './Components/OrderItem/OrderItem';
import Signup from './Components/Signup/Signup';
import StarRating from './Components/StarRating/StarRating';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/star' element={<StarRating></StarRating>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/items/:id' element={<OrderItem></OrderItem>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route path="myProfile" element={<MyProfile></MyProfile>} />
          <Route path="myReview" element={<MyReview></MyReview>} />
          <Route path="myOrder" element={<MyOrder></MyOrder>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
