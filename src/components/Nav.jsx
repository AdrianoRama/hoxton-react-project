import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Nav({ searchValue, setSearchValue, cartList }) {

    const navigate = useNavigate()

    return <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <h1 onClick={() => navigate('/home')} className='logo'>FAUVE.</h1>


            </div>
            <div className='center'>
                <div className='search-container'>
                    <Search className='search-icon' />
                    <input value={searchValue} placeholder='Find your fauve...' className='search-input'
                        onChange={(e) => {
                            setSearchValue(e.target.value)
                        }} />
                </div>
            </div>
            <div className='right'>
                <div className='menu-item'>Register</div>
                <div className='menu-item'>Log in</div>
                <div className='menu-item'>
                    <Badge badgeContent={cartList.length} color='secondary'>
                        <ShoppingCartOutlined onClick={() => {
                            navigate("/cart")
                        }} />
                    </Badge>
                </div>
            </div>
        </div>

    </div>;
}
