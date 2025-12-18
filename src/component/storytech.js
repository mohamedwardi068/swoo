import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApi } from '../context/apicontext';


export default function HeroSlider() {
  const { Products } = useApi();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [fadeState, setFadeState] = useState('fade-in');

  const hasProducts = Products && Products.length > 0;

  const goToNext = useCallback(() => {
    if (!hasProducts) return;
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % Products.length);
      setFadeState('fade-in');
    }, 300);
  }, [hasProducts, Products]);

  const goToPrevious = useCallback(() => {
    if (!hasProducts) return;
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + Products.length) % Products.length);
      setFadeState('fade-in');
    }, 300);
  }, [hasProducts, Products]);

  useEffect(() => {
    if (!hasProducts || isHovered) return;

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [hasProducts, isHovered, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  if (!hasProducts) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <p className="text-gray-500 text-lg">No products available</p>
      </div>
    );
  }

  const currentProduct = Products[currentIndex];

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product showcase"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${fadeState === 'fade-in' ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 py-8 md:py-16">
            <div className="space-y-6 md:space-y-8">
              {currentProduct.discount > 0 && (
                <div className="inline-block">
                  <span className="bg-red-600 text-white text-sm md:text-base font-bold px-4 py-2 rounded-full">
                    {currentProduct.discount}% OFF
                  </span>
                </div>
              )}

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                {currentProduct.name}
              </h1>

              {currentProduct.specs && (
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                  {currentProduct.specs}
                </p>
              )}

              <div className="flex items-baseline gap-4">
                <span className="text-4xl md:text-5xl font-bold text-green-500">
                  ${currentProduct.price.toFixed(2)}
                </span>
                {currentProduct.originalPrice > currentProduct.price && (
                  <span className="text-xl md:text-2xl text-gray-500 line-through">
                    ${currentProduct.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <button className="mt-4 md:mt-8 bg-green-500 hover:bg-green-600 text-black font-bold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 active:scale-95 w-full md:w-auto">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 group"
        aria-label="Previous product"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all duration-300 z-20 group"
        aria-label="Next product"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {Products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFadeState('fade-out');
              setTimeout(() => {
                setCurrentIndex(index);
                setFadeState('fade-in');
              }, 300);
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-green-500 w-6 md:w-8'
                : 'bg-white/30 hover:bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
