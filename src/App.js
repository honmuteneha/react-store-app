
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './template/Header';
import AddProduct from './product/AddProduct';
import ViewProduct from './product/ViewProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Header></Header>
        <Routes>
         
          <Route path='add' element={<AddProduct/>}></Route>
          <Route path='view' element={<ViewProduct/>}></Route>
            {/* pathVariable */}
          <Route path='edit/:id' element={<AddProduct/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
