import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CategoryItem({ category }) {
    const navigate = useNavigate()
    return <div className='category-item-cont'>
        <img className='category-item-image' src={category.img} />
        <div className='category-item-info'>
            <h1 className='category-item-title'>
                {category.title}
            </h1>
            <button onClick={() => category.title === "Woman" ? navigate('/woman') : navigate('/man')} className='category-item-button'>SHOP NOW</button>
        </div>
    </div>;
}
