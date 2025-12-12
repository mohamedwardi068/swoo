import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../context/apicontext';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Searchbar from '../component/Searchbar';
import Product from '../component/product'; // Reusing the Product card component

function CategoryPage() {
    const { id } = useParams();
    const { newProducts, category } = useApi();
    const [categoryName, setCategoryName] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (newProducts && id) {
            // Find category name
            const cat = category.find(c => c._id === id);
            if (cat) setCategoryName(cat.name);

            // Filter products
            const filtered = newProducts.filter(product => product.category === id);
            setFilteredProducts(filtered);
        }
    }, [id, newProducts, category]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <Searchbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center uppercase">
                    {categoryName || 'Category Products'}
                </h1>

                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-500 py-20">
                        <p className="text-xl">No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <div key={product._id} className="bg-white p-4 rounded-xl shadow-md">
                                <Product
                                    _id={product._id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    specs={product.specs}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    shipping={product.shipping}
                                    availability={product.availability}
                                // Add other props as needed by Product component
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default CategoryPage;
