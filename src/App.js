import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { ProductPage } from './components/ProductPage';
import { ProductCreator } from './components/ProductCreator';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/creator' element={<ProductCreator />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>

      {/* <Login />
      <ProductPage />
      <ProductCreator/> */}
    </div>
  );
}

export default App;
