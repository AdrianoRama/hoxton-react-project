import React from 'react';
import Categories from '../components/Categories';

export default function Home({ categories }) {
    return <div>
        <Categories categories={categories} />
    </div>;
}
