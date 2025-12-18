import React from 'react';
import { Handshake, TrendingUp, DollarSign, Users, CheckCircle } from 'lucide-react';

function Partner() {
    const benefits = [
        { icon: TrendingUp, title: 'Grow Your Business', desc: 'Reach 50K+ active customers' },
        { icon: DollarSign, title: 'Competitive Commission', desc: 'Earn up to 15% on every sale' },
        { icon: Users, title: 'Marketing Support', desc: 'Free promotion and advertising' },
        { icon: CheckCircle, title: 'Easy Setup', desc: 'Get started in minutes' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <Handshake className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-5xl font-bold mb-4">Partner With Swoo</h1>
                    <p className="text-xl max-w-2xl mx-auto">Join thousands of successful partners and grow your business with us</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Programs */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <div className="text-4xl mb-4">🏪</div>
                        <h3 className="text-2xl font-bold mb-4">Become a Seller</h3>
                        <p className="text-gray-600 mb-6">
                            List your products on Swoo and reach millions of customers. We handle shipping, payments, and customer service.
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-700">
                            <li>✓ No listing fees</li>
                            <li>✓ Fast payouts</li>
                            <li>✓ Dedicated support</li>
                            <li>✓ Analytics dashboard</li>
                        </ul>
                        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                            Start Selling
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 border-green-500">
                        <div className="text-4xl mb-4">💼</div>
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">POPULAR</div>
                        <h3 className="text-2xl font-bold mb-4">Affiliate Program</h3>
                        <p className="text-gray-600 mb-6">
                            Earn commission by promoting Swoo products. Perfect for bloggers, YouTubers, and influencers.
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-700">
                            <li>✓ Up to 15% commission</li>
                            <li>✓ Monthly payouts</li>
                            <li>✓ Marketing materials</li>
                            <li>✓ Real-time tracking</li>
                        </ul>
                        <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold">
                            Join Affiliate
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <div className="text-4xl mb-4">📢</div>
                        <h3 className="text-2xl font-bold mb-4">Advertise</h3>
                        <p className="text-gray-600 mb-6">
                            Promote your brand to our engaged audience. Multiple ad formats available for maximum reach.
                        </p>
                        <ul className="space-y-2 mb-6 text-gray-700">
                            <li>✓ Banner ads</li>
                            <li>✓ Sponsored products</li>
                            <li>✓ Email campaigns</li>
                            <li>✓ Performance metrics</li>
                        </ul>
                        <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">Why Partner With Us?</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                                <benefit.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-12 text-center">
                    <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-xl mb-8">Join our partner program today and start earning</p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-green-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                            Contact Sales
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-500 transition-colors">
                            View FAQ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;
