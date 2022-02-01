import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Products from './components/Products';
import Nav from './components/Nav';

function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [newList, setNewList] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/categories`).then(resp => resp.json())
      .then(categoriesFromServer => setCategories(categoriesFromServer))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/products`).then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  function getWomanClothes() {
    let woman = products.filter(product => product.Woman === true)
    setNewList(woman)
  }

  function getManClothes() {
    let man = products.filter(product => product.Woman === false)
    setNewList(man)
  }

  return (<div className="App">
    <Nav />
    {<Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path="/home" element={<Home categories={categories} />} />
      <Route path="/woman" element={<Products products={products} getWomanClothes={getWomanClothes} getManClothes={getManClothes} />} />
    </Routes>}

  </div>
  )
}

export default App
