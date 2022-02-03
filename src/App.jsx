import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Products from './components/Products';
import Nav from './components/Nav';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Categories from './components/Categories';

function App() {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [newList, setNewList] = useState([])
  const [filteredWomanList, setFilteredWomanList] = useState(newList)
  const [filteredManList, setFilteredManList] = useState(newList)
  const [clickedProduct, setClickedProduct] = useState()
  const [cartList, setCartList] = useState([])

  function searchClothes() {
    const pathName = window.location.pathname

    if (pathName === "/home") {
      const newCategories = categories.filter(category => category.title.includes(searchValue))
      setFilteredCategories(newCategories)
    }
    else if (pathName === "/woman") {
      const newWomanList = newList.filter(woman => woman.title.includes(searchValue))
      setFilteredWomanList(newWomanList)
    }
    else if (pathName === "/man") {
      const newManList = newList.filter(man => man.title.includes(searchValue))
      setFilteredManList(newManList)
    }
  }

  useEffect(() => { searchClothes() }, [searchValue])

  useEffect(() => {
    fetch(`http://localhost:4000/categories`).then(resp => resp.json())
      .then(categoriesFromServer => {
        setCategories(categoriesFromServer),
          setFilteredCategories(categoriesFromServer)
      })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/products`).then(resp => resp.json())
      .then(productsFromServer => setProducts(productsFromServer))
  }, [])

  function getWomanClothes() {
    let woman = products.filter(product => product.Woman === true)
    setNewList(woman)
    setFilteredWomanList(woman)
  }

  function getManClothes() {
    let man = products.filter(product => product.Woman === false)
    setNewList(man)
    setFilteredManList(man)
  }

  function addAmount(clickedProduct) {
    const updatedProducts = [...products]
    const match = updatedProducts.find(match => match.amount === clickedProduct.amount)
    match.amount++
    setProducts(updatedProducts)
  }

  function minusAmount(clickedProduct) {
    const updatedProducts = [...products]
    const match = updatedProducts.find(match => match.amount === clickedProduct.amount)
    if (match.amount > 0) { match.amount-- }
    setProducts(updatedProducts)
  }

  return (<div className="App">
    <Nav searchValue={searchValue} setSearchValue={setSearchValue} cartList={cartList} />
    {<Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path="/home" element={<Categories categories={filteredCategories} getWomanClothes={getWomanClothes} getManClothes={getManClothes} />} />
      <Route path="/woman" element={<Products products={filteredWomanList} setClickedProduct={setClickedProduct} />} />
      <Route path="/woman/:id" element={<SingleProduct addAmount={addAmount} cartList={cartList} setCartList={setCartList} clickedProduct={clickedProduct} />} />
      <Route path="/man" element={<Products products={filteredManList} setClickedProduct={setClickedProduct} />} />
      <Route path="/man/:id" element={<SingleProduct addAmount={addAmount} cartList={cartList} setCartList={setCartList} clickedProduct={clickedProduct} />} />
      <Route path="/cart" element={<Cart cartList={cartList} addAmount={addAmount} minusAmount={minusAmount} clickedProduct={clickedProduct} />} />
    </Routes>}

  </div>
  )
}

export default App
