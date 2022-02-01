import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"

export default function Nav() {

    const navigate = useNavigate()

    return <div className='container'>
        <div className='wrapper'>
            <div className='left'>
                <h1 onClick={() => navigate('/home')} className='logo'>FAUVE</h1>


            </div>
            <div className='center'>
                <div className='search-container'>
                    <Search className='search-icon' />
                    <input placeholder='Find your fauve...' className='search-input' />
                </div>
            </div>
            <div className='right'>
                <div className='menu-item'>Register</div>
                <div className='menu-item'>Log in</div>
                <div className='menu-item'>
                    <Badge badgeContent={0} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </div>
            </div>
        </div>

    </div>;
}
