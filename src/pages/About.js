import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Users, Target, Award } from 'lucide-react';

function About() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">About Swoo</h1>
                    <p className="text-xl max-w-2xl mx-auto">NYC's First Tech Online Market - Delivering Premium Technology Since 2024</p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-700 text-lg mb-4">
                            At Swoo, we're committed to revolutionizing the tech shopping experience by offering cutting-edge products, unbeatable prices, and exceptional customer service.
                        </p>
                        <p className="text-gray-700 text-lg">
                            We believe everyone deserves access to premium technology that enhances their lives and drives innovation.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-500 mb-2">10K+</div>
                                <div className="text-gray-600">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
                                <div className="text-gray-600">Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                                <div className="text-gray-600">Authentic</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: Target, title: 'Customer First', desc: 'Your satisfaction is our priority' },
                            { icon: Award, title: 'Quality', desc: '100% authentic products' },
                            { icon: Users, title: 'Innovation', desc: 'Latest tech, always' },
                            { icon: Building2, title: 'Trust', desc: 'Transparent and reliable' }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
                                <value.icon className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-green-500 text-white rounded-2xl p-12 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
                    <p className="text-xl mb-6">We're always looking for talented individuals to join our mission</p>
                    <button className="bg-white text-green-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                        View Careers
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
