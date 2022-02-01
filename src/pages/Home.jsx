import React from 'react';
import Categories from '../components/Categories';

export default function Home({ categories, getWomanClothes, getManClothes }) {
    return <div>
        <Categories categories={categories} getWomanClothes={getWomanClothes} getManClothes={getManClothes} />
    </div>;
}
