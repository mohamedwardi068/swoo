import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Watch, Camera, Sparkles, Shirt, Smartphone } from 'lucide-react';
import { useApi } from '../context/apicontext';

const iconMap = {
    headphones: Headphones,
    watch: Watch,
    camera: Camera,
    sparkles: Sparkles,
    shirt: Shirt,
    smartphone: Smartphone,
};

export function FeaturedCategories() {
    const { category } = useApi();
    const [currentOffset, setCurrentOffset] = useState(0);
    const ITEMS_TO_SHOW = 5;
    const ROTATION_INTERVAL = 5000; // 5 seconds

    // Auto-rotate carousel
    useEffect(() => {
        if (!category || category.length === 0) return;

        const interval = setInterval(() => {
            setCurrentOffset((prev) => {
                const next = prev + ITEMS_TO_SHOW;
                return next >= category.length ? 0 : next;
            });
        }, ROTATION_INTERVAL);

        return () => clearInterval(interval);
    }, [category]);

    // Get visible categories (5 at a time, cycling)
    const getVisibleCategories = () => {
        if (!category || category.length === 0) return [];
        const visible = [];
        for (let i = 0; i < ITEMS_TO_SHOW; i++) {
            const index = (currentOffset + i) % category.length;
            visible.push(category[index]);
        }
        return visible;
    };

    const visibleCategories = getVisibleCategories();

    if (!category || category.length === 0) {
        return null;
    }

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Shop by <span className="text-green-500">Category</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover our curated collection of premium products across all categories
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {visibleCategories.map((cat) => {
                        const IconComponent = iconMap[cat.image] || Smartphone;

                        return (
                            <Link
                                key={cat._id || cat.id}
                                to={`/category/${cat._id || cat.id}`}
                                className="group relative p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10"
                            >
                                <div className="flex flex-col items-center text-center gap-4">
                                    <div className="p-4 rounded-xl bg-gray-800 group-hover:bg-green-500/10 transition-colors duration-300">
                                        <IconComponent className="h-8 w-8 text-green-500" />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-white group-hover:text-green-500 transition-colors">
                                            {cat.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-1">
                                            {cat.productCount || 0} Products
                                        </p>
                                    </div>
                                </div>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
