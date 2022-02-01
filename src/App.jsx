import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Products from './components/Products';
import Nav from './components/Nav';
import SingleProduct from './pages/SingleProduct';

function App() {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState(categories)
  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState([])
  const [womanList, setWomanList] = useState([])
  const [filteredWomanList, setFilteredWomanList] = useState(womanList)
  const [manList, setManList] = useState([])
  const [filteredManList, setFilteredManList] = useState(manList)
  const [clickedProduct, setClickedProduct] = useState()

  function searchClothes() {
    const pathName = window.location.pathname

    if (pathName === "/home") {
      const newCategories = categories.filter(category => category.title.includes(searchValue))
      setFilteredCategories(newCategories)
    }
    else if (pathName === "/woman") {
      const newWomanList = womanList.filter(woman => woman.title.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredWomanList(newWomanList)
    }
    else if (pathName === "/man") {
      const newManList = manList.filter(man => man.title.toLowerCase().includes(searchValue.toLowerCase()))
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
    setWomanList(woman)
  }

  function getManClothes() {
    let man = products.filter(product => product.Woman === false)
    setManList(man)
  }

  return (<div className="App">
    <Nav searchValue={searchValue} setSearchValue={setSearchValue} />
    {<Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path="/home" element={<Home categories={filteredCategories} getWomanClothes={getWomanClothes} getManClothes={getManClothes} />} />
      <Route path="/woman" element={<Products products={filteredWomanList} setClickedProduct={setClickedProduct} />} />
      <Route path="/woman/:id" element={<SingleProduct clickedProduct={clickedProduct} />} />
      <Route path="/man" element={<Products products={filteredManList} setClickedProduct={setClickedProduct} />} />
      <Route path="/man/:id" element={<SingleProduct clickedProduct={clickedProduct} />} />
    </Routes>}

  </div>
  )
}

export default App
