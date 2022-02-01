import React from 'react';
import CategoryItem from './CategoryItem';
import "../App.css"

export default function Categories({ categories, getManClothes, getWomanClothes }) {
    const categs = categories.map(category => {
        return <CategoryItem key={category.id} category={category} getManClothes={getManClothes} getWomanClothes={getWomanClothes} />
    })
    return (<div className='categories-cont'>

        {categories.length === 0 ? <div className="not-found-wrapper"><h1>Nothing found...</h1></div>
            : categs}
    </div>);
}
