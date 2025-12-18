import { Truck, Shield, RotateCcw, Headphones } from 'lucide-react';
import styles from './PromoBanner.module.css';

const features = [
    { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
    { icon: Shield, title: 'Secure Payment', desc: '100% protected' },
    { icon: RotateCcw, title: 'Easy Returns', desc: '30-day returns' },
    { icon: Headphones, title: '24/7 Support', desc: 'Dedicated support' },
];

export function PromoBanner() {
    return (
        <section className={`relative py-20 overflow-hidden ${styles.darkSection}`}>
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-swoo-surface to-primary/10" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMkM1NUUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

            <div className="relative container mx-auto px-4">
                {/* Main Promo */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span className="animate-pulse">🔥</span>
                        Limited Time Offer
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Get <span className="text-primary">30% OFF</span> Your First Order
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Join thousands of satisfied customers and experience premium quality at unbeatable prices. Use code <span className="text-primary font-semibold">SWOO30</span> at checkout.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn-primary text-lg px-8 py-4 rounded bg-primary text-white hover:bg-primary/90 transition-colors">
                            Shop Now
                        </button>
                        <button className="text-lg px-8 py-4 border border-border hover:bg-secondary rounded transition-colors bg-white text-black">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30"
                        >
                            <div className="p-3 rounded-xl bg-primary/10 mb-4">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
