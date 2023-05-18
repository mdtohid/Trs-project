import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './Components/AddItem/AddItem';
import AddItemModel from './Components/AddItemModel/AddItemModel';
import AllUsers from './Components/AllUsers/AllUsers';
import Dashboard from './Components/Dashboard/Dashboard';
import Error404 from './Components/Error404/Error404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import Loading from './Components/Loading/Loading';
import Login from './Components/Login/Login';
import ManageAllOrders from './Components/ManageAllOrders/ManageAllOrders';
import ManageItems from './Components/ManageItems/ManageItems';
import MyOrder from './Components/MyOrder/MyOrder';
import MyProfile from './Components/MyProfile/MyProfile';
import MyReview from './Components/MyReview/MyReview';
import OrderItem from './Components/OrderItem/OrderItem';
import Payment from './Components/Payment/Payment';
import Portfolio from './Components/Portfolio/Portfolio';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Signup from './Components/Signup/Signup';
import StarRating from './Components/StarRating/StarRating';
import Team from './Components/Team/Team';

function App() {
  const [id, setId] = useState('');
  const { isLoading, error1, data: items, refetch } = useQuery({
    queryKey: ['items'],
    queryFn: () =>
      fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/items`).then(
        (res) => res.json(),
      ),
  })


  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/star' element={<StarRating></StarRating>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/items' element={<RequireAuth><Items></Items></RequireAuth>}></Route>
        <Route path='/items/:id' element={<RequireAuth><OrderItem></OrderItem></RequireAuth>}></Route>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="myReview" element={<MyReview></MyReview>} />
          <Route path="myOrder" element={<MyOrder></MyOrder>} />
          <Route path="allUsers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} />
          <Route path="addItem" element={<RequireAdmin><AddItem refetch={refetch}></AddItem></RequireAdmin>} />
          <Route path="manageItems" element={
            <RequireAdmin>
              <ManageItems
                items={items}
                isLoading={isLoading}
                setId={setId}
              >
              </ManageItems>
            </RequireAdmin>} />
          <Route path="manageAllOrders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>} />
          <Route path="/dashboard/payment/:id" element={<Payment></Payment>} />
        </Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
      </Routes>
      <AddItemModel id={id} refetch={refetch}></AddItemModel>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
