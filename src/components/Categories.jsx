import React from 'react';
import CategoryItem from './CategoryItem';
import "../App.css"

export default function Categories({ categories }) {
    return <div className='categories-cont'>
        {categories.map(category => {
            return <CategoryItem key={category.id} category={category} />
        })}
    </div>;
}
