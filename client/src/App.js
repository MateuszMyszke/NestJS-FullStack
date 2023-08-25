import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/views/Footer/Footer';
import Navbar from './components/views/Navbar/Navbar';
import NotFound from './components/pages/NotFound/NotFound';

const App = () => {
  return (
    <main>
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
        <Footer /> 
      </Container> 
         
    </main>
  );
}

export default App;
