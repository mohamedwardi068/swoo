import React, { useState } from 'react';
import { HelpCircle, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

function HelpCenter() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: 'How do I track my order?', a: 'You can track your order using the tracking number sent to your email. Visit the Track Order page and enter your order number.' },
        { q: 'What is your return policy?', a: 'We offer a 30-day return policy for all products. Items must be in original condition with all packaging and accessories.' },
        { q: 'Do you ship internationally?', a: 'Currently, we ship within the United States. International shipping is coming soon!' },
        { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee.' },
        { q: 'Are all products authentic?', a: 'Yes! We guarantee 100% authentic products from authorized distributors and manufacturers.' },
        { q: 'Can I cancel my order?', a: 'Orders can be cancelled within 24 hours of placement. Contact customer service immediately.' }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <HelpCircle className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-5xl font-bold mb-4">Help Center</h1>
                    <p className="text-xl">We're here to help you 24/7</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
                        <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-4">24/7 Support Hotline</p>
                        <p className="text-green-500 font-bold text-2xl">(025) 3686 25 16</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
                        <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Email Us</h3>
                        <p className="text-gray-600 mb-4">Get response within 24h</p>
                        <p className="text-green-500 font-semibold">contact@Swootechmart.com</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
                        <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        <h3 className="font-bold text-xl mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-4">Chat with our team</p>
                        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                            Start Chat
                        </button>
                    </div>
                </div>

                {/* FAQs */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="font-semibold text-lg">{faq.q}</span>
                                    {openFaq === idx ? <ChevronUp className="text-green-500" /> : <ChevronDown />}
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-6 text-gray-600 border-t">
                                        <p className="pt-4">{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Policies */}
                <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold mb-6">Our Policies</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-green-500">Shipping Policy</h3>
                            <p className="text-gray-600">Free shipping on orders over $50. Standard delivery: 3-5 business days.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-green-500">Return Policy</h3>
                            <p className="text-gray-600">30-day returns on all items. Products must be unused in original packaging.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-green-500">Warranty</h3>
                            <p className="text-gray-600">All products come with manufacturer warranty. Extended warranty available.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-2 text-green-500">Privacy</h3>
                            <p className="text-gray-600">Your data is protected and never sold to third parties.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
