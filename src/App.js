import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import { Route , Routes} from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Profilepage from './pages/Profilepage';
import Users from './pages/Users';
import Updateusers  from './pages/Updateusers';
import Adminpanel from './pages/Adminpanel';
import AddProduct from './components/Products/AddProduct';
import UpdateProduct from './components/Products/UpdateProduct';
import DeleteProduct from './components/Products/DeleteProduct';
import BookTable from './components/BookTable';
import Booking from './pages/Booking';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Nav/>
 
     <Routes>
      <Route path='/' element={<Home/>}></Route>
     <Route path='/home' element={<Home />} />
     <Route path='/menu' element={<Menu />} />
     <Route path='/about' element={<About />} />
     <Route path='/login' element={<Login/>}/>
     {/* <Route path='/hi' element={<Hii/>}/> */}
     <Route path='/register' element={<Register/>}/>
     <Route path='/Profilepage' element={<Profilepage/>}/>
     <Route path='/Users' element={<Users/>}/>
     <Route path='/Updateusers/:id' element={<Updateusers/>}/>
     <Route path='/Admin' element={<Adminpanel/>}/>
     <Route path='/AddProduct' element={<AddProduct/>}/>
     <Route path='/book' element={<BookTable/>}/>
     <Route path='/UpdateProduct/:id' element={<UpdateProduct/>}/>
     <Route path='/DeleteProduct/:id' element={<DeleteProduct/>}/>
     <Route path='bookingpage' element={<Booking/>}/>
     <Route path='MyBookings' element={<MyBookings/>}/>
     
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
