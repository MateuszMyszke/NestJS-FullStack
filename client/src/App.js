import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/views/Footer/Footer';
import Navbar from './components/views/Navbar/Navbar';
import NotFound from './components/pages/NotFound/NotFound';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/cartRedux';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';

const App = () => {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || 0,
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map((i) => {
        dispatch(addCart(i));
      });
    }
  }, [cartData]);

  return (
    <main>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer /> 
      </Container> 
         
    </main>
  );
}

export default App;
