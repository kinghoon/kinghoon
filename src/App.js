import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import axios from 'axios'
import { useState } from 'react';
function App() {

      let [list,setList]=useState([])
   axios.get('http://localhost:3000/bestList.json')
   .then(res=>{
    
    setList(res.data.list)
   })

  
  return (
    <div className='container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/list' element={<ProductList list={list}></ProductList>}></Route>
        <Route path='/detail/:num' element={<ProductDetail list={list}></ProductDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
