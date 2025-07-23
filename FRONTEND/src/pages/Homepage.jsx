import React from 'react';
import UrlForm from '../components/UrlForm';
import { motion } from 'framer-motion';

const Homepage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        >
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-8">
               
                <div className="max-w-7xl mx-auto w-full">
                     <div className="mb-6 lg:mb-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 hover:text-blue-700 transition-colors text-center mb-3"
                                >
                                    URLBee 🐝
                                </motion.h1>
                                <p className="text-lg sm:text-xl text-gray-600 mb-2 text-center">
                                    Shorten your URLs instantly and track clicks
                                </p>
                                <p className="text-sm sm:text-base text-gray-500 text-center">
                                    Fast, reliable, and completely free URL shortening service
                                </p>
                            </div>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        {/* Left Side */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 sm:p-6 lg:p-8"
                            >
                                <UrlForm />
                            </motion.div>
                        </div>

                        {/* Right Side - Video */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="w-full max-w-md mx-auto lg:max-w-none">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl"
                                >
                                    <source src="/UrlBee.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Features Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20"
                    >
                        {[
                            { icon: '⚡', title: 'Lightning Fast', desc: 'Generate short URLs in milliseconds' },
                            { icon: '📊', title: 'Click Analytics', desc: 'Track clicks and monitor performance' },
                            { icon: '🔒', title: 'Secure & Reliable', desc: 'Your links are safe and always accessible' },
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
                                className={`text-center p-4 sm:p-6 bg-white/50 rounded-xl backdrop-blur-sm ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{feature.icon}</div>
                                <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;
